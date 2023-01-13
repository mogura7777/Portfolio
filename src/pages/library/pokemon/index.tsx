/** @format */

import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/Layout";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableContainer from "../../../components/dndKit/SortableContainer";
import Item from "../../../components/dndKit/Item";

const fetchPokemon = async () => {
  const index = Math.floor(Math.random() * 905 + 1);
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
  const result = await res.json();
  return result;
};
fetchPokemon().then((pokemon) => {
  // console.log(`図鑑番号: ${pokemon["id"]}`);
  // console.log(`名前: ${pokemon["name"]}`);
  // console.log(`画像URL: ${pokemon["sprites"]["front_default"]}`);
});

interface IndexPageProps {
  id: number;
  name: string;
  front_image: string;
}

const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => {
  const [pokemonListMain, setPokemonListMain] = useState([
    {
      id: props.id,
      name: props.name,
      image: props.front_image,
    },
  ]);
  const [items, setItems] = useState<{
    [key: string]: string[];
  }>({
    container1: [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    ],
    container2: [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    ],
  });

  // ドラッグ&ドロップでソート可能なリスト
  const handleClick = async () => {
    const pokemon = await fetchPokemon();
    setPokemonListMain([
      ...pokemonListMain,
      {
        id: pokemon["id"],
        name: pokemon["name"],
        image: pokemon["sprites"]["front_default"],
      },
    ]);
    items.container1.push(pokemon["sprites"]["front_default"]);
  };

  //DragOverlay用のid
  const [activeId, setActiveId] = useState<UniqueIdentifier>();

  // ドラッグの開始、移動、終了などにどのような入力を許可するかを決めるprops
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  //各コンテナ取得関数
  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key: string) =>
      items[key].includes(id.toString())
    );
  };

  // ドラッグ開始時に発火する関数
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    setActiveId(id);
  };

  //ドラッグ可能なアイテムがドロップ可能なコンテナの上に移動時に発火する関数
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    //ドロップした場所にあったリソースのid
    const overId = over?.id;

    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    // container1,container2,container3,container4のいずれかを持つ
    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      console.log("🚀prev", prev);
      // 移動元のコンテナの要素配列を取得
      const activeItems = prev[activeContainer];
      // 移動先のコンテナの要素配列を取得
      const overItems = prev[overContainer];

      // 配列のインデックス取得
      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId.toString());

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = over && overIndex === overItems.length - 1;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };
    });
  };

  // ドラッグ終了時に発火する関数
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    //ドロップした場所にあったリソースのid
    const overId = over?.id;

    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    // container1,container2,container3,container4のいずれかを持つ
    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    // 配列のインデックス取得
    const activeIndex = items[activeContainer].indexOf(id);
    const overIndex = items[overContainer].indexOf(overId.toString());

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
    setActiveId(undefined);
  };
  return (
    <Layout title="Library">
      <h1 className="ttl">Library</h1>
      <div className="pokemon__body">
        <h2 className="sttl">ポケモンアプリ</h2>
        <label>
          <button className="pokeball" onClick={handleClick}></button>
          モンスタボールを投げる
        </label>
        <div className="pokemon__body_in">
          {/* <ul className="pokemon__list">
            {pokemonListMain.map((pokemon) => (
              <li className="pokemon__list_item" key={pokemon.id}>
                <div className="pokemon__list_txt">{pokemon.name}</div>
                <div className="pokemon__list_img">
                  <img src={pokemon.image} />
                </div>
              </li>
            ))}
          </ul> */}

          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <SortableContainer
              id="container1"
              items={items.container1}
              label="選抜メンバー"
            />

            <SortableContainer
              id="container2"
              items={items.container2}
              label="控え"
            />
            <DragOverlay>
              {activeId ? <Item id={activeId} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      <dl className="discretion">
        <dt>説明：</dt>
        <dd className="txt">ローカルストレージでメモを管理する。</dd>
        <dt>参考:</dt>
        <dd>
          <Link
            href="https://zenn.dev/t4ich1/articles/539615ca2d69be"
            className=""
          >
            https://zenn.dev/t4ich1/articles/539615ca2d69be
          </Link>
        </dd>
      </dl>
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
