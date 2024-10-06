import {Layout} from "@/components/Layout";
import Schowcase from "@/components/home/Showcase";
import Welcome from "@/components/home/Welcome";
import Head from "next/head";

export default function IntroPage(){
  return(
    <Layout>
      <Head>
        <title>Petr Valeška | Webový vývojář</title>
      </Head>

      <Welcome/>
      <Schowcase/>
    </Layout>
  );
}