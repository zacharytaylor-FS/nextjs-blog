import Image from 'next/image'

const Avatar = ({name, picture}) => {
  return (
    <div className='flex items-center'>
    <Image
        src={picture}
        className='rounded-full'
        height={76}
        width={76}
        alt={name}
    />
      <span className='text-xl font-bold'>{name}</span>
    </div>
  )
}

export default Avatar
