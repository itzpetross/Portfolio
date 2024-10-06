import { Html, Head, Main, NextScript } from "next/document";

export default function Document(){
  return (
    <Html lang="cs">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>
      </Head>
      <body className="bg-primary text-slate-900 font-SpaceGrotesk selection:bg-theme selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
