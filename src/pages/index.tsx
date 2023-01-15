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
      <div className="About__body">
        <h1 className="About__body_sttl">サイトにつきまして</h1>
        <p className="About__body_txt">
          Next.js、TypeScriptを使用して作成しています。
          <br />
          ポートフォリオサイトして制作していましたが、今後は技術ブログとしても活用する予定です。
          <br />
          ※誤字やリファクタリングなどの報告、Twitterより歓迎中です。
        </p>
      </div>
      <h1 className="ttl">Profile</h1>
      <ScrollRevealContainer move="left">
        <div className="Profile__body">
          <div className="Profile__img">
            <MyImage fname="../img/001.png" size={400} />
          </div>
          <div>
            <h2>Masashi</h2>
            <p className="txt">
              休日は、午前中にジムでウォーキングしながら読書。
              <br />
              午後は娘と公園で遊んで銭湯に行く。ほぼそんなルーティンです。
            </p>
          </div>
        </div>
      </ScrollRevealContainer>

      <h1 className="ttl">History</h1>
      <ScrollRevealContainer move="left">
        <div className="History__body">
          <ul className="timeline">
            <li className="timeline__box">
              <p className="timeline-date">幼少期</p>
              <div className="timeline-content">
                <h3>兵庫県の自然に囲まれて育ちました。</h3>
                <p>イモリとアマガエルを捕まえる日々。</p>
              </div>
            </li>
            <li>
              <p className="timeline-date">小学生時代</p>
              <div className="timeline-content">
                <h3>兄の影響で野球に打ち込む。</h3>
                <p>途中ジャッキー・チェンに憧れ体操を始める。</p>
              </div>
            </li>
            <li>
              <p className="timeline-date">中学生時代</p>
              <div className="timeline-content">
                <h3>スラムダンクの影響でバスケ部に入部の予定</h3>
                <p>中学校にバスケ部がなく引き続き野球に打ち込む。</p>
              </div>
            </li>
            <li>
              <p className="timeline-date">高校生時代</p>
              <div className="timeline-content">
                <h3>友人の誘いでバドミントンに入部。</h3>
                <p>
                  中学校の野球の猛練習の経験が活かされ、団体メンバーに選ばれて県大会に出場。
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">大学生時代</p>
              <div className="timeline-content">
                <h3>
                  美術大学でイラスト科を専攻。主にアナログのイラストを描いていました。この頃、岡村隆史さんに憧れてブレイクダンスをはじめる。卒業目前にしてぎりぎりウィンドミルを習得。
                </h3>
                <p>
                  大学の講義終わりは、生活費を稼ぐためほぼバイトの日々。
                  <br />
                  4年間、扶養枠内をギリギリキープする。
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">社会人</p>
              <div className="timeline-content">
                <h3>
                  独学でホームページを学んだのちに、大阪のWEB制作会社に就職。
                </h3>
                <p>
                  コーディングやCMSの構築、アクセス解析などの業務を経験しました。
                  <br />
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">現在</p>
              <div className="timeline-content">
                <h3>自社開発アプリのフロントエンド/UI設計を担当しています。</h3>
                <p>随時更新...</p>
              </div>
            </li>
          </ul>
        </div>
      </ScrollRevealContainer>

      <h1 className="ttl">Skill</h1>
      <ScrollRevealContainer move="left">
        <div className="Skill__body">
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
            <h2 className="sttl">Google認定資格 取得</h2>
            <ul className="list">
              <li>Google 広告「検索広告」</li>
              <li>Google 広告ディスプレイ</li>
              <li>Google 広告動画</li>
              <li>Google 広告「検索広告」プロフェッショナル</li>
            </ul>
            <p className="txt"></p>
          </div>
          <div className="Skill__box">
            <h2 className="sttl">基本情報技術者試験 取得予定</h2>
            <p className="txt">只今、学習中</p>
          </div>
          <div className="Skill__box">
            <h2 className="sttl">普通自動二輪・普通自動車免許 取得</h2>
            <p className="txt">年に数回運転します。</p>
          </div>
        </div>
      </ScrollRevealContainer>

      <h1 className="ttl">Illustration</h1>
      <ScrollRevealContainer move="left">
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
