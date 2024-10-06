import {Lucia} from "lucia";
import {MongodbAdapter} from "@lucia-auth/adapter-mongodb";
import type {IncomingMessage,ServerResponse} from "http";
import type {Session,User} from "lucia";
import mongoose from "mongoose";
import connect from "./DB";

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        realname: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        password_hash: {
            type: String,
            required: true,
        },
        avatarUrl: {
            type: String,
            required: false,
        },
    },
    { _id: false }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

const sessionSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        user_id: {
            type: String,
            required: true,
        },
        expires_at: {
            type: Date,
            required: true,
        },
    },
    { _id: false }
);

const Session = mongoose.models.Session || mongoose.model("Session", sessionSchema);

const adapter = new MongodbAdapter(
    mongoose.connection.collection("sessions"),
    mongoose.connection.collection("users")
);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: process.env.NODE_ENV === "production",
        },
    },
    getUserAttributes:(attributes) => {
        return {
            username: attributes.username,
            realname: attributes.realname,
            position: attributes.position,
            avatarUrl: attributes.avatarUrl,
        }
    },
});

export async function validateRequest(req:IncomingMessage,res:ServerResponse): Promise<{user:User;session:Session} | {user:null;session:null}>{
	await connect();
    const sessionId = lucia.readSessionCookie(req.headers.cookie ?? "");
	
    if(!sessionId){
		return {
			user: null,
			session: null
		}
	}

	const result = await lucia.validateSession(sessionId);
	
    if(result.session && result.session.fresh){
		res.appendHeader("Set-Cookie", lucia.createSessionCookie(result.session.id).serialize());
	}
	
    if(!result.session){
		res.appendHeader("Set-Cookie", lucia.createBlankSessionCookie().serialize());
	}

	return result;
}

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    username: string;
    realname: string;
    position: string;
    password_hash: string;
    avatarUrl: string;
}
