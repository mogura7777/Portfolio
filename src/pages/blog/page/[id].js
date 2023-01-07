/** @format */

// pages/blog/page/[id].js
import Link from "next/link";
import { formatDate } from "../../../libs/util";
import Layout from "../../../components/Layout";
import { Pagination } from "../../../components/Pagination";
import { client } from "../../../libs/client";

const PER_PAGE = 5;
// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = await client.get({
    endpoint: "blog",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

// pages/blog/[id].js
export default function BlogPageId({ blog, totalCount }) {
  return (
    <Layout title={blog.title}>
      <h1 className="ttl">Blog</h1>
      <ul className="Blog__list">
        {blog.map((blog) => (
          <li className="Blog__item" key={blog.id}>
            <Link className="Blog__link" href={`/blog/${blog.id}`}>
              <div className="Blog__data">{formatDate(blog.publishedAt)}</div>
              <ul className="tag">
                {blog.tags.map((tag) => (
                  <li key={tag.id}>{tag.tag}</li>
                ))}
              </ul>
              <div className="Blog__sttl">{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </Layout>
  );
}
