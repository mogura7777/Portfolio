/** @format */

import type { NextPage } from "next";
import { useState } from "react";
import { MyImage } from "src/components/Atoms/Image";
import { Carousel } from "src/components/Molecules/Carousel";
import dynamic from "next/dynamic";
const ScrollRevealContainer = dynamic(
  () => import("src/components/Molecules/ScrollRevealContainer"),
  { ssr: false }
);
const Home: NextPage = () => {
  const [linkList, setLinkList] = useState([
    "./img/006.jpg",
    "./img/002.jpg",
    "./img/003.jpg",
    "./img/004.jpg",
    "./img/001.png",
    "./img/005.jpg",
  ]);
  return (
    <div>
      <div className="About__body">
        <h1 className="About__body_sttl">ポートフォリオサイトにつきまして</h1>
        <p className="About__body_txt">
          Next.js、TypeScriptを使用して作成しています。
          <br />
          今後は、技術ブログとして活用する予定です。
        </p>
      </div>
      <h1 className="ttl">
        Profile<span className="ttl__read">プロフィール</span>
      </h1>

      <div className="Profile__body">
        <div className="Profile__img">
          <MyImage fname="../img/001.png" size={400} />
        </div>
        <ScrollRevealContainer move="left">
          <div className="Profile__box">
            <h2>Masashi</h2>
            <p className="txt">
              休日は、午前中にジムでウォーキングしながら読書。
              <br />
              午後は娘と公園で遊んで銭湯に行くのが日課です。
            </p>
          </div>
        </ScrollRevealContainer>
      </div>

      <h1 className="ttl">
        History<span className="ttl__read">これまでの経緯</span>
      </h1>

      <div className="History__body">
        <ul className="timeline">
          <li className="timeline__box">
            <p className="timeline-date">幼少期</p>

            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <h3>兵庫県の自然に囲まれて育ちました。</h3>
                <p>昆虫に興味を持ち、山や川に探索する日々。</p>
              </ScrollRevealContainer>
            </div>
          </li>
          <li>
            <p className="timeline-date">小学生時代</p>

            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <h3>兄の影響で野球チームに所属する。</h3>
                <p>途中、ジャッキー・チェンに憧れ体操教室に通い始める。</p>
              </ScrollRevealContainer>
            </div>
          </li>
          <li>
            <p className="timeline-date">中学生時代</p>
            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <p>
                  何も考えずに野球に入部。
                  <br />
                  体育大学上がりの鬼監督に精神と肉体を鍛えられる。
                  <br />
                  引退試合後は、陸上部が部員不足のため、助っ人として入部。
                  <br />
                  夏休みは走り込みの日々。毎日、山道を10キロほど走ってました。
                </p>
              </ScrollRevealContainer>
            </div>
          </li>
          <li>
            <p className="timeline-date">高校生時代</p>
            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <h3>友人の誘いでバドミントンに入部。</h3>
                <p>
                  中学校の野球の猛練習の経験が活かされ、団体メンバーに選ばれて県大会に出場。
                  <br />
                  この頃、影響を受けた美術部の先生の影響で美大を目指すことに。
                  <br />
                  高校2年の終わり頃に画塾に通い出す。
                </p>
              </ScrollRevealContainer>
            </div>
          </li>
          <li>
            <p className="timeline-date">大学生時代</p>
            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <p>
                  美術大学でイラスト科を専攻。主にアナログのイラストを描いていました。
                  <br />
                  大学の講義終わりは、生活費を稼ぐためほぼバイトの日々。扶養枠内をギリギリをせめる。
                  <br />
                  ブレイクダンスをはじめる。卒業目前にしてぎりぎりウィンドミルを習得。
                </p>
              </ScrollRevealContainer>
            </div>
          </li>
          <li>
            <p className="timeline-date">職業訓練校</p>
            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <p>
                  ホームページの基礎を学び、
                  その後、大阪の高度総合事務センター事業でWeb制作に携わる。
                </p>
              </ScrollRevealContainer>
            </div>
          </li>
          <li>
            <p className="timeline-date">社会人</p>
            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <h3>大阪のWEB制作会社に就職。</h3>
                <p>
                  コーディングやCMSの構築、アクセス解析などの業務を経験しました。
                  <br />
                </p>
              </ScrollRevealContainer>
            </div>
          </li>
          <li>
            <p className="timeline-date">現在</p>
            <div className="timeline-content">
              <ScrollRevealContainer move="left">
                <h3>自社開発アプリのフロントエンド/UI設計を担当しています。</h3>
                <p className="txt02">随時更新中...</p>
              </ScrollRevealContainer>
            </div>
          </li>
        </ul>
      </div>

      <h1 className="ttl">
        Skill<span className="ttl__read">スキル</span>
      </h1>

      <div className="Skill__body">
        <ScrollRevealContainer move="left">
          <div className="Skill__box">
            <h2 className="sttl">
              HTML5プロフェッショナル認定試験 レベル1 取得
            </h2>
            <p className="txt">
              HTML5、CSS3などの最新のマークアップを使ってマルチデバイスに対応したWebコンテンツをデザイン・制作できる。
            </p>
          </div>
        </ScrollRevealContainer>
        <ScrollRevealContainer move="left">
          <div className="Skill__box">
            <h2 className="sttl">
              HTML5プロフェッショナル認定試験 レベル2 取得
            </h2>
            <p className="txt">
              JavaScriptなどの最新のマークアップを使ってシステム間連携や最新のマルチメディア技術に対応したWebアプリケーションや動的Webコンテンツの開発・設計ができる。
            </p>
          </div>
        </ScrollRevealContainer>
        <ScrollRevealContainer move="left">
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
        </ScrollRevealContainer>
        <ScrollRevealContainer move="left">
          <div className="Skill__box">
            <h2 className="sttl">基本情報技術者試験 取得予定</h2>
            <p className="txt">只今、学習中</p>
          </div>
        </ScrollRevealContainer>
        <ScrollRevealContainer move="left">
          <div className="Skill__box">
            <h2 className="sttl">普通自動二輪・普通自動車免許 取得</h2>
            <p className="txt">年に数回運転します。</p>
          </div>
        </ScrollRevealContainer>
      </div>

      <h1 className="ttl">
        Illustration<span className="ttl__read">イラストレーション</span>
      </h1>
      <ScrollRevealContainer move="left">
        <Carousel linkList={linkList}></Carousel>
      </ScrollRevealContainer>
    </div>
  );
};

export default Home;
