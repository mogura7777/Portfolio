/** @format */

import Link from "next/link";
import Layout from "../../components/Layout";
import { client } from "../../libs/client";
import { formatDate } from "../../libs/util";
import type { Blog, Tag } from "types/blog";
type Params = {
  blog: Blog;
  prev: any;
  next: any;
};
type Context = {
  params: Blog;
};
type ListApi = {
  contents: Blog[];
};
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: Context) => {
  const id = String(context.params.id);
  const data = await client.get({ endpoint: "blog", contentId: id });
  const prev = await client.get<ListApi>({
    endpoint: "blog",
    queries: {
      limit: 1,
      orders: "-publishedAt",
      filters: `publishedAt[less_than]${data.publishedAt}`,
    },
  });
  const next = await client.get<ListApi>({
    endpoint: "blog",
    queries: {
      limit: 1,
      orders: "publishedAt",
      filters: `publishedAt[greater_than]${data.publishedAt}`,
    },
  });

  const prevEntry = prev.contents[0] || {};
  const nextEntry = next.contents[0] || {};
  return {
    props: {
      blog: data,
      prev: prevEntry,
      next: nextEntry,
    },
  };
};

export default function BlogId({ blog, prev, next }: Params) {
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
      <div className="Blog__nav">
        {prev.id ? (
          <div className="Blog__nav_link">
            <Link className="arrow_l" href={prev.id}>
              {prev.title}
            </Link>
          </div>
        ) : null}

        <div className="Blog__nav_link">
          <Link href="/blog">
            <span>一覧へ戻る</span>
          </Link>
        </div>

        {next.id ? (
          <div className="Blog__nav_link">
            <Link className="arrow_r" href={next.id}>
              {next.title}
            </Link>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
