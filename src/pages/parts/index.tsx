/** @format */

import Link from "next/link";
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
export default function Parts() {
  return (
    <div title="Parts">
      <h1 className="ttl">Parts</h1>
      <div>一覧</div>
    </div>
  );
}
