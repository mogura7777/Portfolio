/** @format */

import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import firebase from "firebase";
import { useRouter } from "next/router";
import "../../components/fire";

const db = firebase.firestore();
const auth = firebase.auth();

export default function Info() {
  const [message, setMessage] = useState("メッセージ");
  const [cmt, setCmt] = useState("");
  const [mydata, setMydata] = useState(null);
  const [msgdata, setMsgdata] = useState([]);
  const router = useRouter();

  // ログインしてなければトップページに戻る
  useEffect(() => {
    if (auth.currentUser == null) {
      router.push("/contact");
    }
  }, []);

  // 入力フィールドの処理
  const onChangeCmt = (e) => {
    setCmt(e.target.value);
  };

  // メッセージの投稿
  const doAction = (e) => {
    const t = new Date().getTime();
    const to = {
      comment: "To: " + cmt,
      time: t,
    };
    const from = {
      comment: "From: " + cmt,
      time: t,
    };
    // 自身のアドレス内にメッセージを追加
    db.collection("address")
      .doc(auth.currentUser.email)
      .collection("address")
      .doc(router.query.id)
      .collection("message")
      .add(to)
      .then((ref) => {
        // 相手のアドレス内にメッセージを追加
        db.collection("address")
          .doc(router.query.id)
          .collection("address")
          .doc(auth.currentUser.email)
          .collection("message")
          .add(from)
          .then((ref) => {
            // 相手のアドレス内のflagを変更
            db.collection("address")
              .doc(router.query.id)
              .collection("address")
              .doc(auth.currentUser.email)
              .update({ flag: true })
              .then((ref) => {
                router.push("/contact");
              });
          });
      });
  };

  // トップページに戻る
  const goBack = (e) => {
    router.push("/contact");
  };

  // アドレスデータとメッセージを取得し表示
  useEffect(() => {
    if (auth.currentUser != null) {
      db.collection("address")
        .doc(auth.currentUser.email)
        .collection("address")
        .doc(router.query.id)
        .get()
        .then((snapshot) => {
          setMydata(snapshot.data());
        });
      db.collection("address")
        .doc(auth.currentUser.email)
        .collection("address")
        .doc(router.query.id)
        .collection("message")
        .orderBy("time", "desc")
        .get()
        .then((snapshot) => {
          const data = [];
          snapshot.forEach((document) => {
            data.push(
              <li className="list-group-item px-3 py-1">
                {document.data().comment}
              </li>
            );
          });
          setMsgdata(data);
        });
      db.collection("address")
        .doc(auth.currentUser.email)
        .collection("address")
        .doc(router.query.id)
        .update({ flag: false });
    } else {
      setMessage("no data");
    }
  }, [message]);

  return (
    <Layout title="Info & messages.">
      <h1 className="ttl">Contact</h1>
      <div className="Contact__body">
        {/* <h5 className="mb-4">{message}</h5> */}
        <div className="text-left">
          <div className="Contact__">
            <div>{mydata != null ? mydata.name : ""}さんへ</div>
            {/* <div>Mail: {mydata != null ? mydata.mail : ""}</div> */}
            {/* <div>Tel: {mydata != null ? mydata.tel : ""}</div> */}
            {/* <div>Memo: {mydata != null ? mydata.memo : ""}</div> */}
          </div>
          <div className="Contact__detail">
            <label>
              <div>メッセージ内容</div>
              <textarea
                type="text"
                onChange={onChangeCmt}
                className="form-control"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="Contact__box">
          <button
            onClick={doAction}
            className="btn btn-primary Contact__box_item"
          >
            メッセージを送る
          </button>
          <button onClick={goBack} className="btn Contact__box_item">
            戻る
          </button>
        </div>
      </div>
      <ul className="list-group">{msgdata}</ul>
    </Layout>
  );
}
