/** @format */
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
import Link from "next/link";
import { MyImage } from "src/components/Atoms/Image";
export default function Parts() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <h1 className="ttl">
        Books<span className="ttl__read">ブック</span>
      </h1>
      <p className="txt">おスススの書籍を掲載していきます。</p>
      <ul className="Books__list clearfix">
        <li>
          <div className="Books__img" onClick={() => setIsOpen(true)}>
            <MyImage fname="../img/books/don_norman_001.jpg" size={140} />
          </div>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="Books__box">
              <p className="Books__box_txt">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <button
                className="Books__btn btn"
                onClick={() => setIsOpen(false)}
              >
                <span>閉じる</span>
              </button>
            </div>
          </Modal>
          <button className="Books__btn" onClick={() => setIsOpen(true)}>
            <span className="Books__btn_ttl">誰のためのデザイン？</span>
            <span className="Books__btn_txt">D. A. ノーマン (著)</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
