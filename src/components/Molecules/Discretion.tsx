/** @format */

import React from "react";
import Link from "next/link";
type Props = {
  text?: string | number;
  linkList: string[];
};
const Discretion = (props: Props) => {
  return (
    <dl className="discretion">
      <dt className="discretion__ttl">説明：</dt>
      <dd className="discretion__box">{props.text}</dd>
      <dt className="discretion__ttl">参考:</dt>
      <dd className="discretion__box">
        {props.linkList.map((id: string, index) => (
          <Link key={id} target="_blank" className="discretion__link" href={id}>
            {id}
          </Link>
        ))}
      </dd>
    </dl>
  );
};

export default Discretion;
