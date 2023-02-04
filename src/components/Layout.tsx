/** @format */

import Head from "next/head";
import { ReactNode } from "react";
import { BreadCrumb } from "./Molecules/BreadCrumb";
import { Header } from "./Organism/Header";
import { SpMenu } from "./Organism/SpMenu";
import { Footer } from "./Organism/Footer";
type Props = {
  children: ReactNode;
  title: string;
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
        {/* <aside className="body__side">
          <nav>
            <p>カテゴリー一覧</p>
            <ul>
              <li>
                <a href="/news/">新着情報</a>
              </li>
              <li>
                <a href="/other/">その他</a>
              </li>
            </ul>
          </nav>
        </aside> */}
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
