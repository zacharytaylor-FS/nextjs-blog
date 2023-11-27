// `app/posts/[id]/page.jsx` is the UI for the '/posts/1' URL
'use client'

/** Dynamic Routes
 * * Dynamic data - Unknown, not sure of the exact segment name will be
 * * Dynamic Segments - filed in at request time or prerendered build time
 * ! Wrap folders name in square brackets [folderName]
 * Dynamic segments are passed as the params prop to layout, page, route, and generateMetadata functions
 *  
 */

// Client Component
const Page = ({params}) => {
  return (
    <>

    <section>
      Post ID: {params.id}
    </section>
    </>
  )
}

export default Page

// export async function generateStaticParams() {
//   const posts = await fetch('http://localhost:3000/posts').then((res) => res.json())

//   return posts
// }