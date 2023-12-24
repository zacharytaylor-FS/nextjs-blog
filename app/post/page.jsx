import Post from "../../components/PostDetails";
import { categoryQuery, postsQuery } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/sanityFetch";

export default async function PostPage() {
    const posts = await sanityFetch({ query: postsQuery });
    const categories = await sanityFetch({ query: categoryQuery });
    console.log(posts)
    // const data = await sanityFetch({ query, tags: ["post"] });
    return(
      <div>
        <Post posts={posts} />
        {/* {categories.map((category) => (
            <ul className="flex flex-row" key={category}>

                <button key={category} className="bg-slate-600 px-4 py-2">{category.title}</button>
            </ul>
        ))} */}
        {/* <Post posts={posts} /> */}
        {/* <DocumentsCount data={data} /> */}
        {/* <Card /> */}
        {/* <TabList /> */}
      </div>
    ) 
    
  
  }
  