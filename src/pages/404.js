/** @format */
import Layout from "../components/Layout";
import Link from "next/link";
import { client } from "../libs/client";

export default function Custom404({ blog }) {
  return (
    <Layout title="404">
      <div className="no_page">
        <h1>404 - Page Not Found</h1>
      </div>
    </Layout>
  );
}
