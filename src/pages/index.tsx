/** @format */

import type { NextPage } from "next";
import Layout from "../components/Layout";
import MyImage from "../components/Image";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <h1 className="ttl">Profile</h1>
      <div className="Home__box">
        <div className="Home__img">
          <MyImage fname="../img/001.png" />
        </div>
        <div>
          <h2>Masashi Kawamata</h2>
          <p className="txt">1986年福岡県で生まれ</p>

          <p className="txt">
            現在は自社開発アプリのフロントエンド/UI設計を担当しています。
          </p>
        </div>
      </div>
      <h1 className="ttl">History</h1>
      <div className="History__box">
        <ul className="History__list">
          <li>
            幼少期は、兵庫県の自然に囲まれて育ちました。
            <br />
            イモリとアマガエルが友達。
          </li>
          <li>
            小学校時代は、兄の影響で野球に打ち込む。
            <br />
            途中ジャッキー・チェンに憧れ体操を始める。
          </li>
          <li>
            中学校校時代は、スラムダンクの影響でバスケ部に入部したかったが、田舎の中学校のためバスケ部が無く断念し、野球に打ち込む。
          </li>
          <li>
            高校時代は、友人の誘いでバドミントンに入部。中学校の野球の遠投の経験が活かされ県大会に出場。
          </li>
          <li>
            美術大学でイラスト科を専攻。主にアナログのイラストを描いていました。
            <br />
            この頃、岡村隆史さんに憧れてブレイクダンスをはじめる。卒業目前にようやく、ウィンドミルを習得。
          </li>
          <li>
            卒業後は、独学でホームページを学んだのちに、大阪のWEB制作会社に就職。
            <br />
            コーディングやCMSの構築、アクセス解析などの業務を経験しました。
          </li>
        </ul>
      </div>
      <h1 className="ttl">Skill</h1>
      <div className="Skill__box">
        <h2 className="sttl">HTML5プロフェッショナル認定試験 レベル1 取得</h2>
        <p className="txt">
          HTML5、CSS3などの最新のマークアップを使ってマルチデバイスに対応したWebコンテンツをデザイン・制作できる。
        </p>
      </div>
      <div className="Skill__box">
        <h2 className="sttl">HTML5プロフェッショナル認定試験 レベル2 取得</h2>
        <p className="txt">
          JavaScriptなどの最新のマークアップを使ってシステム間連携や最新のマルチメディア技術に対応したWebアプリケーションや動的Webコンテンツの開発・設計ができる。
        </p>
      </div>
      <h1 className="ttl">Profile</h1>
    </Layout>
  );
};

export default Home;
