/** @format */
import Layout from "../components/Layout";
import Link from "next/link";
import { client } from "../libs/client";
import { formatDate } from "../libs/util";

// import type { Blog, Tag } from "types/blog";
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Blog({ blog }) {
  return (
    <Layout title="Blog">
      <h1 className="ttl">Blog</h1>
      <ul>
        {blog.map((blog) => (
          <li className="Blog__box" key={blog.id}>
            <Link className="Blog__link" href={`/blog/${blog.id}`}>
              <div className="Blog__data">{formatDate(blog.publishedAt)}</div>
              <div className="Blog__sttl">{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
