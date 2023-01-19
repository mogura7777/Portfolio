/** @format */

import { Layout } from "src/components/Layout";
import { MyImage } from "src/components/Image";
import Link from "next/link";
export default function Library() {
  return (
    <Layout title="Library">
      <h1 className="ttl">Library</h1>
      <div>
        <p className="txt">実装したアプリを掲載していきます。</p>
      </div>
      <ul className="Library__list">
        <li className="Library__list_itme">
          <Link href="./library/pokemon" className="">
            <div className="Library__img">
              <MyImage fname="../img/sample.png" size={300} />
            </div>
            <p className="Library__list_txt">ポケモンジェネレーター</p>
          </Link>
        </li>
        <li className="Library__list_itme">
          <Link href="./library/todo" className="">
            <div className="Library__img">
              <MyImage fname="../img/sample.png" size={300} />
            </div>
            <p className="Library__list_txt">メモアプリ</p>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
