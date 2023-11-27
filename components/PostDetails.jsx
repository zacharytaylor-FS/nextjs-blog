import React from 'react'
import {SanityDocument} from '@sanity/client'
import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import Link from 'next/link';
import Container from './Container';
const PostDetail = ({posts}) => {
    return (
        <Container className=''>
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
                <CardBody className=''>
                    <p>Post details</p>
                </CardBody>
            </Card>
        </Container>
    )
}

export default PostDetail;