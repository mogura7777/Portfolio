/** @format */

import { TableOfContents } from "src/components/Molecules/TalbleOfContent";
import { Toc } from "src/models/common";
type Props = {
  toc: Toc[];
};

export const Sidemenu = ({ toc }: Props) => {
  return (
    <aside className="body__side">
      <TableOfContents toc={toc} />
    </aside>
  );
};
