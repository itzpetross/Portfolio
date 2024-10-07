import {motion} from "framer-motion";
import Image from "next/image";
import Avatar from "@/public/avatar2.png";

export default function Welcome(){
    return(
        <section className="relative bg-secondary bg-dotted-spacing-4 bg-dotted-gray-400/50 py-[150px] lg:pt-[160px]">
            {/*<div className="absolute w-[500px] h-[500px] -top-[100px] -left-[100px] bg-theme rounded-full blur-[200px] z-0"/>*/}
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2">
                    <div className="flex-col mb-3">
                        {/*<div className="absolute w-[500px] h-[500px] right-[130px] bg-theme blur-[200px] z-0"/>*/}
                        <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:2}}>
                            <Image src={Avatar} alt="Avatar" className="w-[250px] rounded-[20px] block mx-auto drop-shadow-[1px_1px_10px_#00000099] lg:w-[380px]"/>{/*animate-fly*/}
                        </motion.div>
                    </div>

                    <div className="flex-col my-auto">
                        <motion.div className="my-auto" initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{duration:2}}>
                            <h1 className="text-[3em] text-center font-black mb-6 lg:text-[4.5em]">Petr <span className="text-theme">Kuchař</span></h1>
                            <p className="text-center text-[18px] text-slate-900 font-regular mb-[40px]">Jmenuji se <span className="text-theme">Petr Kuchař</span>, na internetu vystupuji pod svojí přezdívkou <span className="text-theme">Petross</span>. Je mi 16 let a studuji obor <span className="text-theme">Elektrotechnika</span> na <span className="text-theme">střední škole technické</span>. <span className="text-theme">Vývoji</span> webových stránek se věnuji již <span className="text-theme">čtvrtým rokem</span> a stále rád získávám nové zkušenosti.</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                                <button onClick={()=>window.open("/kontakt","_self")} className="text-white uppercase font-bold w-full py-2 px-8 rounded-sm bg-theme block select-none transition ease-in-out duration-[.40s] hover:bg-theme hover:text-white md:w-auto">
                                    Kontaktujte mě
                                </button>
                                <button onClick={()=>window.open("/portfolio","_self")} className="group block bg-gray-600/20 text-gray-600/80 uppercase font-bold w-full py-2 px-8 rounded-sm block select-none transition ease-in-out duration-[.40s] hover:bg-gray-600/30 md:w-auto">
                                    <div className="flex justify-center">
                                        <span className="mr-2 mt-[2px]">Hotové práce</span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="transition ease-in-out duration-[0.5s] my-auto group-hover:translate-x-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}