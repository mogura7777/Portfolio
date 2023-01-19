/** @format */

import firebase from "firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import "../../libs/firebase/client";

const db = firebase.firestore();
const auth = firebase.auth();

export default function Add() {
  const [message, setMessage] = useState("メンバーを追加");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [memo, setMemo] = useState("");
  const router = useRouter();

  // ログインしてなければトップページに戻る
  useEffect(() => {
    if (auth.currentUser == null) {
      router.push("/contact");
    }
  }, []);

  // name, mail, tel, memoの入力処理
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangeTel = (e) => {
    setTel(e.target.value);
  };
  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };

  // アドレスの登録
  const doAction = (e) => {
    const ob = {
      name: name,
      mail: mail,
      tel: tel,
      memo: memo,
      flag: false,
    };
    db.collection("address")
      .doc(auth.currentUser.email)
      .collection("address")
      .doc(mail)
      .set(ob)
      .then((ref) => {
        router.push("/contact");
      });
  };

  // トップページに戻る
  const goBack = (e) => {
    router.push("/contact");
  };

  return (
    <Layout title="Create data.">
      <h1 className="ttl">Contact</h1>
      <div className="Contact__body">
        <h5 className="mb-4">{message}</h5>
        <div className="Contact__detail">
          <label className="Contact__detail_box">
            <div className="Contact__detail_ttl">Name:</div>
            <input
              type="text"
              onChange={onChangeName}
              className="Contact__input"
            />
          </label>
          <label className="Contact__detail_box">
            <div className="Contact__detail_ttl">Mail:</div>
            <input
              type="text"
              onChange={onChangeMail}
              className="Contact__input"
            />
          </label>
          {/* <div className="form-group">
              <label>Tel:</label>
              <input
                type="text"
                onChange={onChangeTel}
                className="form-control"
              />
            </div> */}
          <label className="Contact__detail_box">
            <div className="Contact__detail_ttl">Memo:</div>
            <input
              type="text"
              onChange={onChangeMemo}
              className="Contact__input"
            />
          </label>
        </div>
        <div className="Contact__box">
          <button
            onClick={doAction}
            className="btn btn-primary Contact__box_item"
          >
            メンバーに追加する
          </button>
          <button onClick={goBack} className="btn Contact__box_item">
            戻る
          </button>
        </div>
      </div>
    </Layout>
  );
}
