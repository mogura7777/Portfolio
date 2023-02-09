/** @format */
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
import { Sidemenu } from "src/components/Molecules/Sidemenu";
import { Tabele } from "src/models/common";
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
export default function Parts(props: Tabele) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Sidemenu toc={props.table}></Sidemenu>
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
