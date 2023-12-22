// `app/posts/[id]/page.jsx` is the UI for the '/posts/1' URL


/** Dynamic Routes
 * * Dynamic data - Unknown, not sure of the exact segment name will be
 * * Dynamic Segments - filed in at request time or prerendered build time
 * ! Wrap folders name in square brackets [folderName]
 * Dynamic segments are passed as the params prop to layout, page, route, and generateMetadata functions
 *  
 */
import Post from "../../../components/Post";
import { client } from "../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/sanityFetch";

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);

  return posts
}

export default async function Page({params}) {
  const post = await sanityFetch({query: postQuery, params})

  return <Post post={post} className='text-neutral-200'/>;
}
// Client Component
// const Page = ({params}) => {
//   const {slug} = params;
//   // return (
//   //   <>

//   //   <section>
//   //     Post ID: {slug}
//   //   </section>
//   //   </>
//   // )
// }

// export default Page

// export async function generateStaticParams() {
//   const posts = await fetch('http://localhost:3000/posts').then((res) => res.json())

//   return posts
// }