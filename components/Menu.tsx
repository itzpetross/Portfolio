import {useRouter} from "next/router";
import {useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/public/icon.png";

class MenuItem{
    display:string;
    href:string;

    constructor(display:string,href:string){
        this.display = display;
        this.href = href;
    }
}

const menuItems = [
    new MenuItem("Úvod","/"),
    new MenuItem("O mně","/about"),
    new MenuItem("Portfolio","/portfolio"),
];

function RenderMenuItem({item}:{item:MenuItem}){
    const router = useRouter();
    
    function isActive(path:string):boolean{
        if(path.endsWith("/")){
            path = path;
        }

        return path === router.asPath;
    }

    return(
        <li className="tracking-widest">
            <Link href={item.href} className={`font-bold uppercase ${isActive(item.href)? "text-theme border-b-theme border-b-[2px]":""} transition ease-in-out duration-[.35s] hover:text-theme`} passHref>{item.display}</Link>
        </li>
    );
}

export default function Menu(){
    const [offset,setOffset] = useState(0);
    const [showMenu,setMenuShow] = useState(false);

    useEffect(()=>{
        const onScroll = () => setOffset(window.pageYOffset);
        setOffset(window.pageYOffset);
        window.addEventListener("scroll",onScroll,{passive:true});
        return()=> window.removeEventListener("scroll",onScroll);
    });

    function toggleMenu(){
        setMenuShow(!showMenu);
    }

    let Scrollnav = 'fixed z-[99] w-[80%] top-0 py-3 bg-primary shadow-[1px_1px_10px_#00000033] rounded-b-[10px]';//let Scrollnav = 'fixed z-[99] w-[80%] top-5 py-3 bg-primary shadow-[1px_1px_10px_#00000033] rounded-[10px]';
    let Navbar = '';
    if(showMenu){
        Navbar += 'fixed z-[99] w-[80%] top-[90px] py-3 bg-primary border-b-solid border-[1px] border-b-primary shadow-[1px_1px_10px_#00000033] rounded-[10px]';
    }else{
        Navbar += 'hidden';
    }if (offset > 0) {
        Scrollnav += '';
    }

    return(
        <div className="container mx-auto flex justify-center">
            <nav className={Scrollnav}>
                <div className="container mx-auto px-9">
                    <div className="flex justify-between">
                        <div className="flex-col my-auto">
                            <Link href="/">
                                <div className="flex">
                                    <Image src={Icon} alt="Avatar" className="w-[35px]"/>
                                    <p className="font-bold uppercase my-auto ml-3 hidden sm:block">Petr <span className="text-theme">Valeška</span></p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex-col my-auto hidden lg:block">
                            <ul className="flex justify-center gap-4">
                                {menuItems.map(item=>(
                                    <RenderMenuItem key={item.href} item={item}/>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-col my-auto hidden lg:block">
                            <button onClick={()=>window.open("/kontakt","_self")} className="text-theme uppercase font-bold w-full py-2 px-8 rounded-sm border-solid border-[2px] border-theme block select-none transition ease-in-out duration-[.40s] hover:bg-theme hover:text-white md:w-auto">Kontakt</button>
                        </div>

                        <div className="flex-col my-auto block lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="bi bi-list cursor-pointer" onClick={()=>toggleMenu()}>
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className={`px-0 mt-4 ${Navbar} lg:hidden`}>
                <ul className="flex flex-col items-center gap-4 py-3">
                    {menuItems.map(item => (
                        <RenderMenuItem key={item.href} item={item}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}