/** @format */

import Link from "next/link";
import Layout from "../../components/Layout";
import { client } from "../../libs/client";
import { formatDate } from "../../libs/util";
import type { InferGetStaticPropsType, NextPage, GetStaticPaths } from "next";
import type { Blog, Tag } from "types/blog";
type Props = {
  blogs: Blog[];
  tags: Tag[];
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const repos = await client.get({ endpoint: "post" });
//   const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
//   const paths = range(1, Math.ceil(repos.totalCount / BLOG_PER_PAGE)).map((repo) => `/page/${repo}`);
//   return { paths, fallback: false };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default function BlogId({ blog }) {
  return (
    <Layout title={blog.title}>
      <div className="Blog__header">
        <div className="Blog__header_box">
          <p className="Blog__data">{formatDate(blog.publishedAt)}</p>
          <ul className="tag">
            {blog.tags.map((tag) => (
              <li key={tag.id}>{tag.tag}</li>
            ))}
          </ul>
        </div>
        <h1 className="Blog__header_ttl">{blog.title}</h1>
      </div>

      <div
        className="Blog__body"
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <Link href="/blog">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>

          <span>一覧へ戻る</span>
        </div>
      </Link>
    </Layout>
  );
}
