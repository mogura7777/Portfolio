/** @format */
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
export const getStaticProps = async () => {
  return {
    props: {
      layout: "main",
      table: [
        {
          text: "モーダル",
          id: "/parts/modal",
          link: "/parts/modal",
          name: "h1",
        },
      ],
    },
  };
};
export default function Parts() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <h1 className="ttl">Parts</h1>
      <div>
        <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Modal>
      </div>
    </div>
  );
}
