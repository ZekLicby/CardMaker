import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { CardProvider } from "@/context/card";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CardProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CardProvider>
    </>
  );
}

export default MyApp;
