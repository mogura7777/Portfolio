/** @format */

export interface ContactParams {
  name: string;
  email: string;
  message: string;
}
export type Toc = {
  text: string;
  id: string;
  link?: string;
  name: string;
};
export type Tabele = {
  layout: string;
  table: Toc[];
};
