/** @format */
import Layout from "../components/Layout";
import Link from "next/link";
import { client } from "../libs/client";

export default function Blog({ blog }) {
  console.log("🚀 ~ file: blog.js:17 ~ Blog ~ blog", blog);

  return (
    <Layout title="Blog">
      <ul>
        {blog.map((blog) => (
          <li className="Blog__box" key={blog.id}>
            <Link className="Blog__link" href={`/blog/${blog.id}`}>
              <div className="Blog__data">{blog.publishedAt}:</div>
              <div className="Blog__ttl">{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
