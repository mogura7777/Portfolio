/** @format */
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
import Link from "next/link";
export default function Parts() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <h1 className="ttl">Parts</h1>
      <div className="Parts__body">
        <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Modal>
      </div>
      <Link href="/parts/" className="">
        <p className="Parts__list_txt">一覧へ戻る</p>
      </Link>
    </div>
  );
}
