import {useState} from "react";
import {AlertMessage} from "./AlertMessage";
import axios from "axios";

export default function Contact(){
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault();

        try{
            if(!email.trim()){
                AlertMessage("warning","Musíte vyplnit email!");
                return;
            }else if(!subject.trim()){
                AlertMessage("warning","Musíte vyplnit titulek!");
                return;
            }else if(!message.trim()){
                AlertMessage("warning","Musíte vyplnit zprávu!");
                return;
            }

            const res = await axios.post('/api/send-email', {
                email,
                subject,
                message
            },{
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": process.env.NEXT_PUBLIC_API_TOKEN
                }
            });

            if(res.status === 200){
                AlertMessage("success","Email byl úspěšně odeslán!");
                setEmail('');
                setSubject('');
                setMessage('');
            }else{
                AlertMessage("error","Nepodařilo se odeslat email!");
            }
        }catch(e){
            AlertMessage("error","Někde nastala chyba!");
            console.log(e);
        }
    }

    return(
        <section className="container mx-auto px-9 pt-[50px]">
            <h1 className="text-center mx-auto font-semibold text-theme text-[3.5em] underline underline-offset-[5px] mb-[30px]">Napište mi Email</h1>
            <div className="bg-primary mb-6 shadow-[1px_1px_10px_#00000035] py-3 px-6 w-full mx-auto rounded-[5px] lg:max-w-[600px]">
                <form onSubmit={handleSubmit}>
                    <div className="mt-0">
                        <label htmlFor="email" className="block text-slate-900">Vaše e-mailová adresa</label>
                        <input type="email" name="email" placeholder="Váš Email" className="w-full select-none bg-slate-200 py-2 px-2 rounded-[5px] outline-none invalid:text-red-600" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="titulek" className="block text-slate-900">Titulek</label>
                        <input type="text" name="titulek" placeholder="Titulek" className="w-full select-none bg-slate-200 py-2 px-2 rounded-[5px] outline-none invalid:text-red-600" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                    </div>
                    
                    <div className="mt-3">
                        <label htmlFor="zprava" className="block text-slate-900">Váš požadavek</label>
                        <textarea placeholder="Vaše zpráva" name="zprava" className="w-full select-none bg-slate-200 py-2 px-2 rounded-[5px] outline-none invalid:text-red-600" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    </div>
                    <button type="submit" className="mt-3 text-theme uppercase font-bold py-2 px-8 rounded-sm border-solid border-[2px] border-theme block ml-auto w-full select-none transition ease-in-out duration-[.40s] hover:bg-theme hover:text-white md:w-auto">Odeslat žádost</button>
                </form>
            </div>
        </section>
    );
}