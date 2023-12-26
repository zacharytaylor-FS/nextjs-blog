// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, author->{name, nickname, "image": image.asset->url, bio }, categories[]->, publishedAt, content, _createdAt, _updatedAt, _rev, _type
  }`;

//* Get all posts category
export const categoryQuery = groq`*[_type == "category"]{
  _id, title, description
}`
// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body, slug
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;