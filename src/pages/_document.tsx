/** @format */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja-JP">
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,700,400"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        />
      </Head>
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
