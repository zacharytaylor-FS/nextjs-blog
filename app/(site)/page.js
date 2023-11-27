// `app/(site)/page.js` is the UI for the '/' URL
import {Button, Link} from '@nextui-org/react'; 
import PostDetail from '../../components/PostDetails';

// Server Component
export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-5 mb-3">
    <div className='flex items-center gap-3'>

      <h1 className='text-5xl text-white'>Headless <a href='/' className='text-pink-500'>NextUI</a> Blog</h1>

    </div>
      <p>Populate me with Sanity Content</p>
      <div className='flex flex-col gap-6 m-4'>
      <h2>Card</h2>
        <PostDetail />
        <PostDetail />
        <PostDetail />
      </div>
    </section>
  )
}
