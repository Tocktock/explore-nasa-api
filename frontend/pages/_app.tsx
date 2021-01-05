import type { AppProps } from "next/app";
import Head from "next/head";
import "../assets/style/main.css";

const globalApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/3d8fd185f5.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="flex flex-col w-full h-full bg-black ">
        <Component {...pageProps} />{" "}
      </div>
    </>
  );
};

export default globalApp;
