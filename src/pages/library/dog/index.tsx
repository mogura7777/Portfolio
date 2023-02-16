/** @format */

import { useEffect, useState } from "react";
import Image from "next/image";
import { MyImage } from "src/components/Atoms/Image";
import { GetServerSideProps, NextPage } from "next";
import { Discretion } from "src/components/Molecules/Discretion";
import styles from "src/styles/Home.module.scss";

type Params = {
  initialCatImageUrl: string;
};

const searchDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const res = await response.json();
  return res;
};

export const getServerSideProps = async () => {
  const res = await searchDog();
  console.log(res);
  return {
    props: {
      initialCatImageUrl: res.message,
    },
  };
};

export default function Home({ initialCatImageUrl }: Params) {
  const [linkList, setLinkList] = useState([
    "https://zenn.dev/kiriyama/articles/f82696bb37c651",
  ]);
  const [text, setText] = useState("ワンちゃんの画像を見て癒やされるページ");
  const [catImage, setCatImage] = useState(initialCatImageUrl);
  const handleClick = async () => {
    const res = await searchDog();
    setCatImage(res.message);
  };

  return (
    <div>
      <h1 className="ttl">
        Library<span className="ttl__read">ライブラリ</span>
      </h1>
      <div className="">
        <h2 className="sttl02">ワンちゃんde癒やし</h2>
        <div className={styles.container}>
          <MyImage fulname={catImage} size={400} />
          <button className="btn" onClick={handleClick}>
            次のワンちゃん
          </button>
        </div>
      </div>

      <Discretion text={text} linkList={linkList}></Discretion>
    </div>
  );
}
