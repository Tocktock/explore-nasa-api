import "../assets/main.css";
import type { AppProps } from "next/app";

const globalApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default globalApp;
