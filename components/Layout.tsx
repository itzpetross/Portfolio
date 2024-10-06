import {motion} from "framer-motion";
import {ReactLenis} from "lenis/react";
import Menu from "./Menu";
import Footer from "./Footer";

export function Layout({children}:{children:React.ReactNode}){
    return(
        <ReactLenis root>
            <main>
                <Menu/>
                <motion.div initial={{y:0,opacity:0}} animate={{y:0,opacity:1}} transition={{ease:"easeInOut",duration:0.9}} style={{position:"relative"}}>
                    {children}
                </motion.div>
                <Footer/>
            </main>
        </ReactLenis>
    );
}