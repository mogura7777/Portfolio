/** @format */

export const getStaticProps = async () => {
  return {
    props: {
      layout: "main",
    },
  };
};
export default function Parts() {
  return (
    <>
      <div title="Parts">
        <h1 className="ttl">Parts</h1>
        <div className="toc-content">
          一覧
          <h2>モーダル</h2>
        </div>
      </div>
    </>
  );
}
