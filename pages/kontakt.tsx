import {Layout} from "@/components/Layout";
import {Hero} from "@/components/Hero";
import Head from "next/head";
import Contact from "@/components/Contact";

export default function ContactPage(){    
    return(
        <section className="bg-dotted-spacing-4 bg-dotted-gray-400/50">
            <Head>
                <title>Petr Kuchař | Kontakt</title>
            </Head>

            <Layout>
                <Hero>
                    <h1 className="text-center text-[3.5em] text-white font-semibold">Kontaktujte mě!</h1>
                </Hero>

                <Contact/>
            </Layout>
        </section>
    );
}