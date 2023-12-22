// ./nextjs-app/app/_components/Posts.tsx
import { Avatar, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

export default function Posts({ posts = [] }) {
  const postsCount = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className="container">
    
    <h1 className="text-2xl py-4 font-bold"> {postsCount} Blk Talk Posts</h1>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 divide-y justify-center divide-blue-100">
      {posts.map((post) => (
        <Card
          key={post._id}
          className="max-w-[450px] p-4 hover:bg-white-50 flex gap-x-5 mb-5 mx-auto bg-neutral-700"
        >
          <CardHeader className="flex gap-6">
          <Avatar isBordered radius="full" size="lg" src={post.author.image} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-small font-italic decoration-underline leading-none text-neutral-300"><span className="text-[#2a86ff]">{post.author.name}</span>, wrote</h1>
            <h2 className='text-2xl content-start text-slate-400'>{post.title}</h2>
            
          </div>
          {post.categories}
            {/* <Avatar
              isBordered
              src={post.author.image}
              size="lg"
              radius="full"
            /> */}
          <div className='flex'>
            <div className="flex-col justify-between ">
                {/* <p className="text-md text-neutral-50 font-semibold">{post.author.name}</p> */}
                {/* <p className="text-xs"><span className="text-[#2a86ff]">Last Updated:</span> {post._updatedAt}</p> */}
            </div>
          </div>
          </CardHeader>
          <Divider />
          <CardBody className="text-[#2a86ff]">
            Article
              {/* <h2 className='text-xl content-start text-slate-400'>{post.title}</h2> */}
            <h6 className="text-small tracking-tight text-default-400">Published: {post._createdAt}</h6>
            <h5 className="text-small tracking-tight text-default-400">Last updated: {post._updatedAt}</h5>
              {/* <p className='text-xl content-end'>{post.author.bio}</p> */}

          </CardBody>
          <CardFooter>
              <Link href={`posts/${post.slug.current}`} className='bg-black/60 px-4 py-2 rounded-full text-[#2a86ff] text-small'>View More</Link>
          </CardFooter>
        </Card>
      ))}
    </div>
    </div>
  );
}