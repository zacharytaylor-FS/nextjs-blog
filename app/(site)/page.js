import {Button, Link} from '@nextui-org/react'; 
import PostDetail from '../../components/PostDetails';


export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-5 mb-3">
    <div className='flex gap-3'>
      <p className='text-4xl text-md text-pink-500'>👨🏽‍💻 NextJS </p>
      <p className='text-4xl text-md'>x 🚀</p>
      <p className='text-4xl text-md text-pink-500'>NextUI </p>
      <p className='text-4xl text-md'>Sanity Blog 🚀</p>

    </div>
      <Button as={Link} href='/' color='primary'>Click me</Button>
      <p>Populate me with Sanity Content</p>
      <div className='flex flex-col gap-4 m-4'>
        <PostDetail />
        <PostDetail />
        <PostDetail />
      </div>
    </section>
  )
}
