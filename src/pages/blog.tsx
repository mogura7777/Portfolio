/** @format */
import Layout from "../components/Layout";
import Link from "next/link";
import { client } from "../libs/client";
import { formatDate } from "../libs/util";
import type { InferGetStaticPropsType, NextPage } from "next";
import type { Blog, Tag } from "types/blog";
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  const tag = await client.get({ endpoint: "tag" });
  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
  tags: Tag[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tags,
  blogs,
}: Props) => {
  return (
    <Layout title="Blog">
      <h1 className="ttl">Blog</h1>
      <ul>
        {blogs.map((blog) => (
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
};

export default Home;
