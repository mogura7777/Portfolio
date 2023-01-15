/** @format */

import Link from "next/link";
type Props = {
  totalCount: number;
};
export const Pagination = ({ totalCount }: Props) => {
  const PER_PAGE = 5;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="Pagination">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};
