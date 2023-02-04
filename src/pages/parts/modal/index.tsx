/** @format */
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
export const getStaticProps = async () => {
  return {
    props: {
      layout: "main",
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
