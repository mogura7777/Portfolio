/** @format */
import firebase from "firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SiFacebook, SiGithub, SiGoogle, SiTwitter } from "react-icons/si";
import { Layout } from "src/components/Layout";
import { Discretion } from "src/components/Molecules/Discretion";
import "src/libs/firebase/client";
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

auth.signOut();

export default function Index() {
  let addresses = [];
  const [user, setUser] = useState(null);
  const [data, setData] = useState(addresses);
  const [message, setMessage] = useState(
    "Googleログイン後にメッセージ機能が利用できます。"
  );
  const router = useRouter();
  const [linkList, setLinkList] = useState([]);
  const [text, setText] = useState(
    "Googleアカウント ログイン時にメッセージ機能が利用できます。Firebase Authenticationを使用しています。"
  );
  // ログイン処理
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user.displayName);
        setMessage("logined: " + result.user.displayName);
      })
      .catch((error) => {
        setUser("NONE");
        setMessage("not logined.");
      });
  };

  // ログアウト処理
  const logout = () => {
    auth.signOut();
    setUser(null);
    addresses = [];
    setData(addresses);
    setMessage("logout...");
  };

  // ログイン表示をクリックしたとき
  const doLogin = (e) => {
    if (auth.currentUser == null) {
      login();
    } else {
      logout();
    }
  };

  // /addへの移動
  const doAction = (e) => {
    router.push("/library/message/add");
  };

  // アドレスのページへの移動
  const doLink = (e) => {
    const id = e.target.id;
    router.push("/library/message/info?id=" + id);
  };

  // アドレスデータの取得と表示
  useEffect(() => {
    if (auth.currentUser != null) {
      setUser(auth.currentUser.displayName);
      setMessage(auth.currentUser.displayName + "");
      db.collection("address")
        .doc(auth.currentUser.email)
        .collection("address")
        .get()
        .then((snapshot) => {
          snapshot.forEach((document) => {
            const doc = document.data();
            addresses.push(
              <li
                className="Contact__list_item"
                onClick={doLink}
                id={document.id}
              >
                {doc.flag ? "√" : ""}
                {doc.name} ({doc.mail})
              </li>
            );
          });
          setData(addresses);
        });
    } else {
      addresses.push(<li key="1"></li>);
    }
  }, [message]);

  return (
    <Layout title="Contact">
      <h1 className="ttl">Library</h1>
      <div className="Contact__body">
        <h2 className="sttl">メセージアプリ</h2>
        <div className="Contact__box">
          {auth.currentUser != null ? (
            <button className="btn Contact__box_item" onClick={doLogin}>
              <SiGoogle className="btn__icon" />
              ログアウト
            </button>
          ) : (
            <button className="btn Contact__box_item" onClick={doLogin}>
              <SiGoogle className="btn__icon" />
              ログイン
            </button>
          )}

          {auth.currentUser != null ? (
            <button
              className="btn btn-add Contact__box_item"
              onClick={doAction}
            >
              メンバーを追加する
            </button>
          ) : null}
        </div>
        {/* <p className="Contact__message">ログイン：{message}さん</p> */}
        <div className="Contact__caption">
          {auth.currentUser != null
            ? "メッセージを送るメンバーを選択してください"
            : ""}
        </div>
        <ul className="Contact__list">{data}</ul>
      </div>
      <Discretion text={text} linkList={linkList}></Discretion>
    </Layout>
  );
}
