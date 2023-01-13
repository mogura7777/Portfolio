/** @format */

import type { NextPage } from "next";
import Layout from "../components/Layout";
import MyImage from "../components/Image";
import dynamic from "next/dynamic";
const ScrollRevealContainer = dynamic(
  import("../components/ScrollRevealContainer"),
  { ssr: false }
);
const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <h1 className="ttl">Profile</h1>
      <div className="Home__body">
        <div className="Home__img">
          <MyImage fname="../img/001.png" />
        </div>
        <div>
          <h2>Masashi Kawamata</h2>
          <p className="txt">1986年福岡県生まれ</p>

          <p className="txt">
            現在は自社開発アプリのフロントエンド/UI設計を担当しています。
          </p>
        </div>
      </div>
      <ScrollRevealContainer move="left">
        <h1 className="ttl">History</h1>
        <div className="History__body">
          <ul className="History__list">
            <li>
              幼少期は、兵庫県の自然に囲まれて育ちました。
              <br />
              イモリとアマガエルを捕まえる日々。
            </li>
            <li>
              小学校時代は、兄の影響で野球に打ち込む。
              <br />
              途中ジャッキー・チェンに憧れ体操を始める。
            </li>
            <li>
              中学校校時代は、スラムダンクの影響でバスケ部に入部の予定
              <br />
              中学校にバスケ部がなく引き続き野球に打ち込む。
            </li>
            <li>
              高校時代は、友人の誘いでバドミントンに入部。中学校の野球の遠投の経験が活かされ県大会に出場。
            </li>
            <li>
              美術大学でイラスト科を専攻。主にアナログのイラストを描いていました。
              <br />
              この頃、岡村隆史さんに憧れてブレイクダンスをはじめる。
              <br />
              卒業目前にしてぎりぎりウィンドミルを習得。
            </li>
            <li>
              卒業後は、独学でホームページを学んだのちに、大阪のWEB制作会社に就職。
              <br />
              コーディングやCMSの構築、アクセス解析などの業務を経験しました。
            </li>
            <li>
              現在は自社開発アプリのフロントエンド/UI設計を担当しています。
            </li>
          </ul>
        </div>
      </ScrollRevealContainer>
      <ScrollRevealContainer move="left">
        <h1 className="ttl">Skill</h1>
        <div className="Skill__body">
          <div className="Skill__box">
            <h2 className="sttl">普通自動二輪・普通自動車免許 取得</h2>
            <p className="txt">年に数回運転します。</p>
          </div>
          <div className="Skill__box">
            <h2 className="sttl">
              HTML5プロフェッショナル認定試験 レベル1 取得
            </h2>
            <p className="txt">
              HTML5、CSS3などの最新のマークアップを使ってマルチデバイスに対応したWebコンテンツをデザイン・制作できる。
            </p>
          </div>
          <div className="Skill__box">
            <h2 className="sttl">
              HTML5プロフェッショナル認定試験 レベル2 取得
            </h2>
            <p className="txt">
              JavaScriptなどの最新のマークアップを使ってシステム間連携や最新のマルチメディア技術に対応したWebアプリケーションや動的Webコンテンツの開発・設計ができる。
            </p>
          </div>
          <div className="Skill__box">
            <h2 className="sttl">基本情報技術者試験 取得予定</h2>
            <p className="txt">只今、学習中</p>
          </div>
        </div>
      </ScrollRevealContainer>
      <ScrollRevealContainer move="left">
        <h1 className="ttl">Illustration</h1>
        <ul className="Illust_list">
          <li className="Illust_list_item">
            <MyImage fname="../img/001.png" size={300} />
          </li>
          <li className="Illust_list_item">
            <MyImage fname="../img/002.jpg" size={300} />
          </li>
          <li className="Illust_list_item">
            <MyImage fname="../img/003.jpg" size={300} />
          </li>
          <li className="Illust_list_item">
            <MyImage fname="../img/004.jpg" size={300} />
          </li>
          <li className="Illust_list_item">
            <MyImage fname="../img/005.jpg" size={300} />
          </li>
          <li className="Illust_list_item">
            <MyImage fname="../img/006.jpg" size={300} />
          </li>
        </ul>
      </ScrollRevealContainer>
    </Layout>
  );
};

export default Home;
