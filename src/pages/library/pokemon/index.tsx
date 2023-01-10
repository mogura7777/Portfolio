/** @format */

import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
const fetchPokemon = async () => {
  const index = Math.floor(Math.random() * 905 + 1);
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
  const result = await res.json();
  return result;
};
fetchPokemon().then((pokemon) => {
  console.log(`図鑑番号: ${pokemon["id"]}`);
  console.log(`名前: ${pokemon["name"]}`);
  console.log(`画像URL: ${pokemon["sprites"]["front_default"]}`);
});

interface IndexPageProps {
  id: number;
  name: string;
  front_image: string;
}

const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => {
  const [pokemonID, setPokemonID] = useState(props.id);
  const [pokemonName, setPokemonName] = useState(props.name);
  const [pokemonImageUrl, setPokemonImageUrl] = useState(props.front_image);

  const handleClick = async () => {
    const pokemon = await fetchPokemon();
    setPokemonID(pokemon["id"]);
    setPokemonName(pokemon["name"]);
    setPokemonImageUrl(pokemon["sprites"]["front_default"]);
  };

  return (
    <Layout title="Library">
      <h1 className="ttl">Library</h1>
      <div className="Library__body">
        <h2 className="sttl">ポケモンアプリ</h2>
        <div className="Library__body_in">
          <p>Id:{pokemonID}</p>
          <div>
            <img src={pokemonImageUrl} />
            <p>{pokemonName}</p>
            <button onClick={handleClick}>チェンジ</button>
          </div>
        </div>
      </div>
      <div>メモ：</div>
      <div>
        参考:
        <Link
          href="https://zenn.dev/t4ich1/articles/539615ca2d69be"
          className=""
        >
          https://zenn.dev/t4ich1/articles/539615ca2d69be
        </Link>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemon = await fetchPokemon();
  return {
    props: {
      id: pokemon["id"],
      name: pokemon["name"],
      front_image: pokemon["sprites"]["front_default"],
    },
  };
};

export default IndexPage;
