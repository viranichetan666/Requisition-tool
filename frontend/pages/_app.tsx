import { GlobalContextProvider } from "helpers/GlobalContext";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { Hanken_Grotesk } from "next/font/google";
import "../styles/globals.css";

import queryClient from "./../services/config/queryClient";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <GlobalContextProvider>
      <style jsx global>{`
        html {
          font-family: ${hanken.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </GlobalContextProvider>
  );
}
export default MyApp;
