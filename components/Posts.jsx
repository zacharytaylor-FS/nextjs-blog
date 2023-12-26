// ./nextjs-app/app/_components/Posts.tsx
import { Avatar, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

export default function Posts({ posts = [] }) {
  const postsCount = posts.length === 1 ? `1 Post` : `${posts.length} `;

  return (
    <div className="container mx-auto">
    <div className="">

    <p className="text-[12px] italic py-3"> {postsCount} Posts</p>
    <h1 className="text-3xl mb-3 font-extrabold">Posts</h1>
    </div>
    <Divider />
    <div className="container mx-auto py-3 grid grid-cols-1 gap-10 divide-y justify-center divide-blue-100">
      {posts.map((post) => (
        <Card
          key={post._id}
          className="max-w-[900px] shadow-sm flex gap-x-2  bg-gray-100 text-black shadow-foreground"
        >
          <CardHeader className="flex gap-2">


          <Avatar isBordered radius="square" size="lg" src={post.author.image} className="w-20 h-20 object-fit"/>

          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-medium font-italic decoration-underline leading-none"><span className="text-[#2a86ff] text-xs italic">{post.author.name}</span>, wrote</h1>
            <h2 className='text-5xl content-start'>{post.title}</h2>
          </div>
          </CardHeader>
          <Divider />
          <CardBody className="text-[#2a86ff]">
            Post Details
            <h6 className="text-small tracking-tight text-default-400">Published: {post._createdAt}</h6>
            <h5 className="text-small tracking-tight text-default-400">Last updated: {post._updatedAt}</h5>
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