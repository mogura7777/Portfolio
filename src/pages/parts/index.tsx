/** @format */

import { Layout } from "src/components/Layout";
import { Modal } from "src/components/Modal/Modal";
import Link from "next/link";
import { useState } from "react";
export default function Parts() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Layout title="Parts">
      <h1 className="ttl">Parts</h1>
      <ul>
        <li>
          <Link href="./parts/modal" className="">
            モーダル
          </Link>
        </li>
        <li>
          <Link href="./parts/modal" className="">
            タブ
          </Link>
        </li>
        <li>
          <Link href="./parts/modal" className="">
            ロード
          </Link>
        </li>
        <li>
          <Link href="./parts/modal" className="">
            ツールチップ
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
