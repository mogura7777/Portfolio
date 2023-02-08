/** @format */

import Head from "next/head";
import { ReactNode } from "react";
import { BreadCrumb } from "./Molecules/BreadCrumb";
import { Sidemenu } from "./Molecules/Sidemenu";
import { Header } from "./Organism/Header";
import { SpMenu } from "./Organism/SpMenu";
import { Footer } from "./Organism/Footer";
import { Toc } from "src/models/common";
type Props = {
  children: ReactNode;
  title?: string;
  toc: Toc[];
};

export const LayoutMain = ({ children, title = "", toc }: Props) => {
  return (
    <div className="body">
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>

      <SpMenu></SpMenu>
      <div className="body__box02">
        <Sidemenu toc={toc ? toc : []}></Sidemenu>
        <main className="body__main02">
          <BreadCrumb></BreadCrumb> {children}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};
