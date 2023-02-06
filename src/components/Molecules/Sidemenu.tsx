/** @format */

import { NextPage } from "next";
import Link from "next/link";

export const Sidemenu: NextPage = () => {
  return (
    <aside className="body__side">
      <h2 className="sttl">目次</h2>
      <nav>
        <ul>
          <li>
            <Link href="/parts/modal" className="">
              モーダル
            </Link>
          </li>
          <li>
            <Link href="/parts/modal" className="">
              タブ
            </Link>
          </li>
          <li>
            <Link href="/parts/modal" className="">
              ロード
            </Link>
          </li>
          <li>
            <Link href="/parts/modal" className="">
              ツールチップ
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
