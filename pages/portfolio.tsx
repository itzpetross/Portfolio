import {Layout} from "@/components/Layout";
import {Hero} from "@/components/Hero";
import Head from "next/head";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage(){    
    return(
        <section className="bg-dotted-spacing-4 bg-dotted-gray-400/50">
            <Head>
                <title>Petr Valeška | Portfolio</title>
            </Head>

            <Layout>
                <Hero>
                    <h1 className="text-center text-[3.5em] text-white font-semibold">Mé portfolio</h1>
                </Hero>

                <Portfolio/>
            </Layout>
        </section>
    );
}