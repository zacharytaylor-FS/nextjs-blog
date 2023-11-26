import React from 'react'
Link
import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import Link from 'next/link';

const PostDetail = () => {
    return (
        <div className=''>

        
        <Card className='w-[450px] min-w-[380px]'>
        <CardHeader className='flex gap-3'>
            <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
            <div className='flex flex-col'>
                <p className='text-md'>NextUI</p>
                <Link isExternal href='https://nextui.org' className='text-small'>nextui.org</Link>
            </div>
        </CardHeader>
        <Divider />
            <CardBody>
                <p>Post details</p>
            </CardBody>
        </Card>
        </div>
    )
}

export default PostDetail;