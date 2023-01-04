/** @format */

import type { NextPage } from "next";
import Layout from "../components/Layout";
import MyImage from "../components/Image";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="flex Home__box">
        <div className="Home__img">
          <MyImage fname="../img/001.png" />
        </div>
        <div>
          <h1 className="ttl">Profile</h1>
          <p className="txt">
            大阪にて自社開発のフロントエンドを担当しています。
          </p>
          <p className="txt">
            大阪にて自社開発のフロントエンドを担当しています。
          </p>
        </div>
      </div>
      <h1 className="ttl">Career</h1>
      <p className="txt">
        大阪にてフリーランスのWeb制作をしております。
        2006年よりアルバイトにて制作を始める。
        2007年から5年間大阪市内の制作会社でデザイン・コーディングなどの業務を行う。
        2012年よりフリーランスへ転向。
      </p>
    </Layout>
  );
};

export default Home;
