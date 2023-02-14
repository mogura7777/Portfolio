/** @format */

import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { Discretion } from "src/components/Molecules/Discretion";
import styles from "src/styles/Home.module.scss";
import Link from "next/link";

const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.GOURMET_API_KEY}&format=json&large_area=Z023`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const IndexPage = ({ data }) => {
  const {
    results_available = 0,
    results_start = 1,
    results_returned = 1,
    shop: defaultShops = [],
  } = data.results;

  const [shop, updateShops] = useState(defaultShops);
  const [page, updatePage] = useState({
    results_available: results_available,
    results_returned: results_returned,
    results_start: results_start,
  });

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword === "") return;

    const params = { keyword: keyword };
    const query = new URLSearchParams(params);

    const request = async () => {
      const res = await fetch(`/api/search?${query}`);
      const data = await res.json();
      const nextData = data.results;
      console.log("🚀 ~ file: index.js:49 ~ request ~ nextData", nextData);
      console.log("🚀 ~ file: index.js:49 ~ request ~ nextData", query);
      console.log("🚀 ~ file: index.js:49 ~ request ~ nextData", params);
      updatePage({
        results_available: nextData.results_available,
        results_returned: nextData.results_returned,
        results_start: nextData.results_start,
      });

      updateShops(nextData.shop);
    };

    request();
  }, [keyword]);

  useEffect(() => {
    console.log("🚀query", page.results_start);
    if (page.results_start === 1) return;

    const params = { start: page.results_start, keyword: keyword };
    const query = new URLSearchParams(params);

    const request = async () => {
      const res = await fetch(`/api/search?${query}`);
      const data = await res.json();
      const nextData = data.results;

      updatePage({
        results_available: nextData.results_available,
        results_returned: nextData.results_returned,
        results_start: nextData.results_start,
      });

      if (nextData.results_start === 1) {
        updateShops(nextData.shop);
        return;
      }

      updateShops((prev) => {
        return [...prev, ...nextData.shop];
      });
    };

    request();
  }, [page.results_start]);

  const handlerOnClickReadMore = () => {
    if (page.results_returned <= page.results_start) return;

    updatePage((prev) => {
      return {
        ...prev,
        results_start: prev.results_start + 1,
      };
    });
  };

  const handlerOnSubmitSearch = (e) => {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");

    const value = fieldQuery.value || "";
    console.log("🚀value", value);
    setKeyword(value);
  };

  return (
    <>
      <div className="max-w-3xl font-mono bg-gray-100 mx-auto">
        <div>
          <div className="">
            <form onSubmit={handlerOnSubmitSearch} className="text-center">
              <input
                type="search"
                name="query"
                className="rounded py-2 px-4 text-left border-red-500"
                placeholder="キーワードを入力して下さい"
              />
              <button className="ml-2 text-white bg-red-500 rounded py-2 px-6 hover:opacity-75">
                Search
              </button>
            </form>
            <div className="text-sm pt-2 text-gray-600 text-center">
              <span>{page.results_available}</span> <span>件</span>
            </div>
          </div>
        </div>
        <ul className="mx-4">
          {shop.map((item, index) => {
            return (
              <li
                key={index}
                className="my-4 bg-white rounded border-red-500 border-2"
              >
                <Link href={item.urls.pc}>
                  <div className="grid grid-cols-10">
                    <div className="col-span-2 self-center">
                      <div>
                        <img src={item.photo.mobile.s} alt={item.name} />
                      </div>
                    </div>
                    <div className="ml-3 col-span-8">
                      <div className="text-lg mt-2 mr-2"> {item.name}</div>
                      <div className="text-xs mt-2 mr-2 pb-2">
                        <div className="text-xs">
                          <span className="font-medium">{item.genre.name}</span>
                          <span className="ml-4">{item.catch}</span>
                        </div>
                        <p className="mt-1"> {item.access}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {page.results_returned <= page.results_start ? (
          <div></div>
        ) : (
          <div className="text-center pt-4 pb-8">
            <button
              className="bg-red-500 rounded text-white tracking-wider font-medium hover:opacity-75 py-2 px-6 "
              onClick={handlerOnClickReadMore}
            >
              もっと読む
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default IndexPage;
