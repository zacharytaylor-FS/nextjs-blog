import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1573164713712-03790a178651?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen w-screen bg-cover bg-center p-10 md:p-15 opacity-75'>
     {/* Hero content */}
        <div className="flex flex-col items-start justify-center py-24">
          <div className='lg:w-5/12 w-full'>

            <h1 className="flex flex-col text-7xl text-black md:text-7xl max-w-lg font-serif w-11/12 sm:w-4/12 mb-10 uppercase font-extrabold">
            Blk 
                <span className="underline decoration-[#2a86ff] decoration-4 ml-6">Talk </span>{" "}
            </h1>
          </div>
            {/* CTA */}
            <button className="flex items-center gap-1 border border-white bg-white px-4 py-2 rounded-full font-medium active:scale-90 transition duration-100 text-black hover:bg-[#2a86ff] hover:border-white hover:text-white">Join The Movement <span className='text-sm'><ArrowRightIcon width={20} height={20}/></span></button>
        </div>
    </div>
  )
}

export default Hero