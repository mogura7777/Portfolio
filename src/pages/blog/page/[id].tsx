/** @format */
import type { Blog, Tag } from "types/blog";
import Link from "next/link";
import { formatDate } from "../../../libs/util";
import { Pagination } from "../../../components/Molecules/Pagination";
import { client } from "../../../libs/client";
import { Layout } from "../../../components/Layout";
type Params = {
  params: Blog;
};
type Props = {
  blogs: Blog[];
  tags: Tag[];
  totalCount: number;
};
const PER_PAGE = 5;
// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: Params) => {
  const id = Number(context.params.id);
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};

// pages/blog/[id].js
export default function BlogPageId({ blogs, totalCount }: Props) {
  return (
    <Layout title="Blog">
      <h1 className="ttl">Blog</h1>
      <ul className="Blog__list">
        {blogs?.map((blog) => (
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
