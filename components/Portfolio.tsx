import {useState,useEffect} from "react";
import {getProjects} from "@/data/Portfolio";
import Loader from "./Loader";
import Image from "next/image";

interface Proj{
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    link: string;
    date: string;
}

export default function Schowcase(){
    const [isLoading,setLoading] = useState(true);
    const [projects,setProjects] = useState<Proj[]>([]);

    useEffect(() => {
        async function getPortfolioProjects(){
            try{
                const projs = await getProjects();
                setLoading(false);
                setProjects(projs);
            }catch(e){
                console.log(e);
            }
        }

        getPortfolioProjects();
    },[]);

    return(
        <section className="mt-[50px]">
            <div className="container mx-auto px-[10px] md:px-[50px]">
                <div className="grid gap-9 lg:grid-cols-3">
                    {!isLoading && projects.slice(0,3).map(proj => (
                        <div key={proj._id} className="flex-col">
                            <div className="bg-primary rounded-[5px] shadow-[1px_1px_10px_#00000033] p-[15px_15px_10px_15px] w-full">
                                <div className="overflow-hidden w-full">
                                    <Image src={proj.imageUrl} alt={proj.name} width={1500} height={1500} className="rounded-[5px] w-full h-auto max-h-[22rem] mb-3 select-none" draggable={false}/>
                                </div>
                                
                                <div className="flex flex-col mb-6">
                                    <h1 className="text-[1.5em] font-semibold mb-2 lg:text-[1.5em]">{proj.name}</h1>
                                    
                                    <div className="border-l-theme border-solid border-l-2">
                                        <p className="text-slate-900 pl-3">{proj.description}</p>
                                    </div>
                                </div>

                                <button onClick={()=>window.open(proj.link,"_blank")} className="group block my-auto ml-auto bg-gray-600/20 text-gray-600/80 uppercase font-bold w-full py-2 px-8 rounded-sm block select-none transition ease-in-out duration-[.40s] hover:bg-gray-600/30 md:w-auto">
                                    <div className="flex justify-center">
                                        <span className="mr-2 mt-[2px]">Navštívit</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="transition ease-in-out duration-[0.5s] my-auto group-hover:translate-x-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isLoading? (
                <Loader/>
            ):null}
        </section>
    );
}