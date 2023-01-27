/** @format */

import React from "react";
import { useFormState } from "src/pages/contact/useFormState";
import { useSendContactForm } from "src/pages/contact/useSendContactForm";
import { ContactParams } from "src/pages/contact/ContactParams";
import { Layout } from "src/components/Layout";

const IndexPage: React.FC = () => {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };

  return (
    <Layout title="Contact">
      <h1 className="ttl">Contact</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form method="post" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="お名前"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="メールアドレス"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="メッセージ"
            name="message"
            onChange={handleChange}
            required
          />
        </div>
        <button className="Contact__btn fa fa-paper-plane" type="submit">
          お問い合わせをする
        </button>
      </form>
    </Layout>
  );
};

export default IndexPage;
