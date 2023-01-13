/** @format */

import { useDroppable } from "@dnd-kit/core";
import {
  rectSortingStrategy,
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const SortableContainer = ({
  id,
  items,
  label,
}: // pokemonList,
{
  id: string;
  items: string[];
  // nameList: string[];
  // pokemonList: {
  //   id: number;
  //   name: string;
  //   image: string;
  // }[];
  label: string;
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div className="pokemon__box">
      <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
        <h3 className="sttl">{label}</h3>
        <ul
          ref={setNodeRef}
          className="pokemon__list w-full border-2 border-gray-500/75 p-5 mt-2 rounded-md"
        >
          {items.map((id: string) => (
            <li className="pokemon__list_item">
              <SortableItem key={id} id={id} />
            </li>
          ))}
        </ul>
      </SortableContext>
    </div>
  );
};

export default SortableContainer;
