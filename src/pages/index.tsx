/** @format */

import type { NextPage } from "next";
import Layout from "../components/Layout";
import MyImage from "../components/Image";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="Home__box">
        <h1 className="ttl">Profile</h1>
      </div>
      <div className="flex Home__box">
        <div className="Home__img">
          <MyImage fname="../img/001.png" />
        </div>
        <div>
          <p className="txt">
            1986年福岡県で生まれ
            <br />
            兵庫県の自然に囲まれて育ちました。
          </p>
          <p className="txt">
            美術大学でイラスト科を専攻。主にアナログのイラストを描いていました。
          </p>
          <p className="txt">
            卒業後は、独学でホームページを学んだのちに、大阪のWEB制作会社に就職。
            <br />
            コーディングやCMSの構築、アクセス解析などの業務を経験しました。
          </p>
          <p className="txt">
            現在は自社開発アプリのフロントエンド/UI設計を担当しています。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
