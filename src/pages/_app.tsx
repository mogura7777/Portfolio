/** @format */

import "styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNprogress from "nextjs-progressbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
