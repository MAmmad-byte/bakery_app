import Image from 'next/image'
import React from 'react'
import Card_BG  from "@/public/productCardBg.png"
import product1  from "@/public/product1.png"
const TopProductCard = () => {
  return (
    <div className="relative w-full  flex p-8 rounded-md overflow-hidden">
        <Image
          src={Card_BG}
          alt="heroBG"
          placeholder="blur"
        //   blurDataURL="/hero.jpg"
          quality={100}
          fill
          style={{
            objectFit: "fill",
            zIndex: 1,
          }}
        />
        <div className='z-10 flex flex-col items-center w-full'>
            <Image
          src={product1}
          alt="heroBG"
          width={200}
          placeholder="blur"
        //   blurDataURL="/hero.jpg"
          quality={100}
          
        />
        <div className=' w-full flex items-center justify-between mt-10'>
            <h3 className='text-2xl font-medium'>$40</h3>
            <p>!</p>
        </div>
        <div className='w-full flex items-center justify-between mt-5'>
            <h3 className='text-3xl font-extralight'>Whole grain bread</h3>
            <button className='p-2 text-2xl bg-secondary rounded-md ml-5'>Add</button>
        </div>
        </div>
      </div>
  )
}

export default TopProductCard
