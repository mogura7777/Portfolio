/** @format */

import Link from "next/link";
export const getStaticProps = async () => {
  return {
    props: {
      layout: "main",
    },
  };
};
export default function Parts() {
  return (
    <div title="Parts">
      <h1 className="ttl">Parts</h1>
    </div>
  );
}
