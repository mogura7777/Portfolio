/** @format */

import Head from "next/head";
import { ReactNode } from "react";
import { BreadCrumb } from "./Molecules/BreadCrumb";
import { Sidemenu } from "./Molecules/Sidemenu";
import { Header } from "src/components/Organism/Header";
import { SpMenu } from "src/components/Organism/SpMenu";
import { Footer } from "src/components/Organism/Footer";
import { Toc } from "src/models/common";
import { renderToc } from "src/libs/render-toc";
type Props = {
  // children: ReactNode;
  children: any;
  title?: string;
  toc: any;
};

export const LayoutMain = ({ children, title = "" }: Props) => {
  // const toc = renderToc(children.props);
  return (
    <div className="body">
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>

      <SpMenu></SpMenu>
      <div className="body__box02">
        {/* <Sidemenu toc={toc ? toc : []}></Sidemenu> */}
        <main className="body__main02">
          <BreadCrumb></BreadCrumb> {children}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};
