/** @format */

import "src/styles/globals.scss";
import "swiper/css/bundle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNprogress from "nextjs-progressbar";
import { initializeFirebaseApp } from "src/libs/firebase/firebase";
import { ChakraProvider } from "@chakra-ui/react";
initializeFirebaseApp();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider attribute="class">
        <NextNprogress
          color="#fff"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
