// ./nextjs-app/app/_components/Post.jsx

"use client";

import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Post({ post }) {
  return (
    <>
    <main className="container mx-auto prose prose-lg p-4 text-neutral-100 flex flex-col">
      <h2 className="text-3xl text-white">{post.title}</h2>
      {post?.mainImage ? (
        <div className="container">
          <Image
            className="float-left m-0 aspect-sqaure mb-4 rounded-lg"
            src={builder.image(post.mainImage).width(1200).height(900).url()}
            width={600}
            height={350}
            alt={post?.mainImage?.alt}
            />
          <h2 className="text-3xl text-white">{post.author}</h2>
          </div>
      ) : null}
      {post?.body ? <PortableText value={post.body} className='text-white'/> : null}
    </main>
    </>
  );
}