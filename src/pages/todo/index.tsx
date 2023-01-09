/** @format */

import Layout from "../../components/Layout";
import dynamic from "next/dynamic";
const TodoApp = dynamic(() => import("../../components/TodoApp"), {
  //サーバーサイド側でインポートはしない
  ssr: false,
});
export default function Contact() {
  return (
    <Layout title="Contact">
      <TodoApp />
    </Layout>
  );
}
