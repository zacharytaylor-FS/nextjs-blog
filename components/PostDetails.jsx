import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import Link from 'next/link';
import Container from './Container';

const PostDetail = ({posts = []}) => {
    
  const postsCount = posts.length === 1 ? `1 Post` : `${posts.length} `;
    
    return (
        <Container className='flex flex-col gap-5'>
            <div className="py-4">

            <span className="text-xs italic">  {postsCount} POSTS</span>
            <h2 className="text-4xl ">Posts</h2>
            </div>
            <Divider />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                {posts.map((post) => (

            <Card className='w-[320px] min-w-[280px] light:bg-gray-100'>

            <CardHeader className='flex gap-3'>
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="full"
                    src={post.author.image}
                    width={40}
                />
                <div>

                    <p className='text-md self-start'>{post.author.name}</p>
                    <p className='text-xs text-neutral-400 self-start'>Followers - 14.k</p>
                </div>
            </CardHeader>
            <Divider />
                <CardBody className=''>
                <div className='flex flex-col'>
                    <p className='text-md'>{post.title}</p>
                    <Link href={`posts/${post.slug.current}`} className='text-small hover:text-green-500'>Read more...</Link>
                </div>
                </CardBody>
            </Card>

))}
</div>
        </Container>
    )
}

export default PostDetail;