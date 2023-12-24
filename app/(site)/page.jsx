// ./nextjs-app/app/page.tsx

import Hero from "../../components/Hero";
import PostDetails from "../../components/PostDetails";
import Posts from "../../components/Posts";
import { postsQuery } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/sanityFetch";

export default async function Home() {
  const posts = await sanityFetch({ query: postsQuery });
  // console.log(posts)
  return(
    <div>
      <Hero />
      <Posts posts={posts} />
      <PostDetails posts={posts}/>
    </div>
  ) 
  

}


// // `app/(site)/page.js` is the UI for the '/' URL
// 'use client'
// import React from 'react'
// import {Button, Link} from '@nextui-org/react'; 
// import PostDetail from '../../components/PostDetails';


// // Server Component
// export default async function Home() {

  
 

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="card">
//               <div className="card-header">
//                 <h3 className="card-title">Posts</h3>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   {/* {posts?.map((post) => (
//                     <div className="col-md-4" key={post?._id}>
//                       <p>{post?.title}</p>
//                     </div>
//                   ))} */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
//   // return (
//   //   <section className="flex min-h-screen flex-col items-center justify-between p-5 mb-3">
//   //   <div className='flex items-center gap-3'>

//   //     <h1 className='text-5xl text-white'>Headless <a href='/' className='text-pink-500'>NextUI</a> Blog</h1>

//   //   </div>
//   //     <p>Populate me with Sanity Content</p>
//   //     <div className='flex flex-col gap-6 m-4'>
//   //       {/* {pet.length > 0 && (
//   //         <ul>
//   //           {pet.map((pet) => (
//   //             <li key={pet._id}>{pet?.name}</li>
//   //           ))}
//   //         </ul>
//   //       )} */}
//   //     <h2>Card</h2>
//   //     {posts.map((post) => (
//   //       <li key={post._id}>
//   //         <Link href={post.slug.current}>{post.title}</Link>
//   //       </li>
//   //       ))}
//   //       <PostDetail />
//   //       <PostDetail />
//   //       <PostDetail />
// //       </div>
// //     </section>
// //   )
// }

