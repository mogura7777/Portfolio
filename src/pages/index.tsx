/** @format */

import type { NextPage } from "next";
import Layout from "../../components/Layout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <p className="text-4xl">Welcome to Nextjs</p>
    </Layout>
  );
};

export default Home;
