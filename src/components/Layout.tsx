/** @format */

import Head from "next/head";
import { ReactNode } from "react";
import { BreadCrumb } from "./Molecules/BreadCrumb";
import { Header } from "./Organism/Header";
import { SpMenu } from "./Organism/SpMenu";
import { Footer } from "./Organism/Footer";
type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "" }: Props) => {
  return (
    <div className="body">
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>
      <SpMenu></SpMenu>
      <div className="body__box">
        <main className="body__main">
          {" "}
          <BreadCrumb></BreadCrumb>
          {children}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};
