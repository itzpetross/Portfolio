import type {NextApiRequest,NextApiResponse} from "next";
import {connectDatabase} from "@/lib/DB";
import Project from "@/models/Project";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    await connectDatabase();
    const xAccessToken = req.headers["x-access-token"];
  
    if(req.method !== "GET"){
        return res.status(405).json({
            details:{
                status: "405 - Method Not Allowed",
                message: "Jiná metoda než GET není povolena!"
            }
        });
  }else if(!xAccessToken){
    return res.status(403).json({
        details:{
            status: "403 - Forbidden",
            message: "Hlavička requestu musí obsahovat AccessToken!"
        }
    })
  }

  try{
    const projects = await Project.find();

    if(projects.length < 0){
        return res.status(201).json({
            details:{
                status: "201 - No Content",
                message: "V databázi se nenachází žádný projekt!"
            }
        });
    }else{
        return res.status(201).json({
            details:{
                status: "200 - Success",
            },
            data: projects
        });
    }

  }catch(e){
    console.log(e);
    return res.status(500).json({
        details:{
            status: "500 - Internal Server Error",
            message: "Někde nastala chyba!"
        }
    });
  }
}
