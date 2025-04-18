import React from 'react'
import Carousel from './ui/carousel'
import { projects } from '@/data'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from 'next/image'

const Project = () => {
 
  return (
  <div className='py-20'>
    <h1 className='text-center lg:text-[3rem] font-bold text-sm'>
        Kind words from {''}
        <span className='text-purple-300'> satisfied Clients

        </span>

    </h1>
  <div className='flex flex-col items-center justify-center max-lg:mt-10 '>
    <div className="lg:  mt-12 grid lg:grid-cols-2 grid-cols-1 g lg:items-center lg:justify-center lg:gap-6">
    {
      projects.map(({id, img, link, title, des, }) => (
        <div className="">
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
        style={{
          background: '#020024',
backgroundColor: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(4, 4, 48, 1) 98%, rgba(0, 212, 255, 1) 100%)'
      }}
      >
    {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
       {title}
      </CardItem>
      <CardItem
        translateZ="100"
        rotateX={20}
        rotateZ={-10}
        className="w-full mt-4"
      >
        <Image
          src={img}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-between items-center mt-20">
        <CardItem
          translateZ={20}
          translateX={-40}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          translateX={40}
          as="button"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          Sign up
        </CardItem>
      </div>
    </CardBody>
    </CardContainer>
        </div>
        
      ))
    }
 
 </div>
 </div>
 </div>
   
  )

}

export default Project
