import type {NextApiRequest,NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    //const xAccessToken = req.headers["x-access-token"];
    const {email,subject,message} = req.body;

    if(req.method !== "POST"){
        return res.status(405).json({
            details:{
                status: "405 - Method Not Allowed",
                message: "Jiná metoda než POST není povolena!"
            }
        });
    }

    if(!email || !message){
        return res.status(400).json({
            details:{
                status: "400 - Bad Request",
                message:"Je potřeba vyplnit email a zprávu!"
            }
        });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.seznam.cz",
        port: 465,
        secure: true,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.MAIL_PWD
        }
    });

    try{
        await transporter.sendMail({
            from: process.env.EMAIL,
            replyTo: email,
            to: process.env.EMAIL, 
            subject: subject || "Nová zakázka", 
            text: message
        });
    
        res.status(200).json({
            details:{
                status: "200 - Success",
                message: "Email byl úspěšně odeslán!"
            }
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            details:{
                status: "500 - Internal Server Error",
                message: "Email se nepodařilo odeslat!"
            }
        });
    }
}