/** @format */

import Head from "next/head";
import { ReactNode } from "react";
import { BreadCrumb } from "./Molecules/BreadCrumb";
import { Sidemenu } from "./Molecules/Sidemenu";
import { Header } from "./Organism/Header";
import { SpMenu } from "./Organism/SpMenu";
import { Footer } from "./Organism/Footer";
type Props = {
  children: ReactNode;
  title?: string;
};

export const LayoutMain = ({ children, title = "" }: Props) => {
  return (
    <div className="body">
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>
      <SpMenu></SpMenu>
      <div className="body__box02">
        <Sidemenu></Sidemenu>
        <main className="body__main02">
          {" "}
          <BreadCrumb></BreadCrumb>
          {children}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};
