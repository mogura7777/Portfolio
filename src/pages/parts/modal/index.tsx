/** @format */

import { Layout } from "src/components/Layout";
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
export default function Parts() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Layout title="Parts">
      <h1 className="ttl">Parts</h1>
      <div>
        <button onClick={() => setIsOpen(true)}>モーダルを開く</button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Modal>
      </div>
    </Layout>
  );
}
