import mongoose from "mongoose";

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
export default User;