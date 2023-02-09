/** @format */
import Link from "next/link";
export const TableOfContents = ({ toc }) => {
  return (
    <div className="toc">
      <h1 className="toc__ttl">目次</h1>
      <ul className="toc__list">
        {toc?.map((data) => (
          <li key={data.id}>
            {data.link ? (
              <Link className="arrow_r" href={data.link}>
                {data.text}
              </Link>
            ) : (
              <a href={`#${data.id}`}>{data.text}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
