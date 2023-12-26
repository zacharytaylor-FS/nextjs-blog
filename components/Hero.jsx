import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1573164713712-03790a178651?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-96 w-full bg-cover bg-center p-20 opacity-85'>
     {/* Hero content */}
        <div className="flex-1 flex-col items-center justify-center">
            <h1 className="text-5xl text-white md:text-6xl max-w-lg font-serif w-11/12 sm:w-9/12 mb-10">
                <span className="underline decoration-[#2a86ff] decoration-4">Blk Talk in Fullstack</span>{" "}
                <span className="underline decoration-white text-[#2a86ff] text-4xl">Connect with Kulture</span>
            </h1>
            {/* CTA */}
            <button className="flex items-center gap-1 border border-white bg-white px-4 py-2 rounded-full font-medium active:scale-90 transition duration-100 text-black hover:bg-[#2a86ff] hover:border-white hover:text-white">Join The Movement <span className='text-sm'><ArrowRightIcon width={20} height={20}/></span></button>
        </div>
    </div>
  )
}

export default Hero