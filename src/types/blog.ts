/** @format */

// src/types/blog.ts

export type Blog = {
  id: string | number;
  body: string;
  title: string;
  tags: Tag[];
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
