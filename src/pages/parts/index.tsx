/** @format */

import { Sidemenu } from "src/components/Molecules/Sidemenu";
import { Tabele } from "src/models/common";

export const getStaticProps = async () => {
  return {
    props: {
      layout: "main",
      table: [
        {
          text: "モーダル",
          id: "/parts/modal",
          link: "/parts/modal",
          name: "h1",
        },
      ],
    },
  };
};
export default function Parts(props: Tabele) {
  return (
    <>
      <Sidemenu toc={props.table}></Sidemenu>
      <div title="Parts">
        <h1 className="ttl">Parts</h1>
        <div>一覧</div>
      </div>
    </>
  );
}
