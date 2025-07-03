import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import Image from 'next/image'

const Clients = () => {
  return (
   <div className='py-15 ' id='clients'>
           <h1 className='text-center lg:text-[3rem] font-bold text-sm'>
               Kind words from {''}
               <span className='text-purple-300'> satisfied Clients
   
               </span>
   
           </h1>
         <div className='flex flex-col items-center justify-center max-lg:mt-15 '>
          <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
          <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed='slow'
        
          />
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
            {companies.map(({id, img, nameImg, name, }) => (
                <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                  <Image src={img} 
                  alt={name} 
                  width={100
                  }
                  height={100
                  }
                  className='md:max-w-10 max-w-5'
                  />
                  <Image src={nameImg} 
                  alt={name} 
                  width={100
                  }
                  height={100}
                  className='md:max-w-24 max-w-20'
                  />
                </div>
            ))}
          </div>
          </div>
          </div>
         </div>
  )
}

export default Clients
