import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return ( 
    <motion.div 
    initial={{opacity: 0.2, y: 100}}
    transition={{duration: 1}}
    whileInView={{opacity: 1,y: 0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center
    my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Transform your words into breathtaking visuals.</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80
            cl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>
                    Introducing the AI-Powered Text to Image Generator
                </h2>
                <p className='text-gray-600'>Bring your ideas to life effortlessly with our 
                    intelligent image generator. Whether you're designing, storytelling, or 
                    simply exploring creativity, our tool converts your words into eye-catching 
                    images in seconds — no design skills needed.
                </p>
                <p className='text-gray-600'>
                    Type a prompt, describe your vision, and our AI will instantly craft a
                     high-quality image that matches your imagination. From unique characters 
                     and dreamscapes to product visuals and abstract art, the possibilities are limitless.
                </p>
                <p className='text-gray-600'>
                    Powered by advanced AI technology, our generator gives you the creative freedom to 
                    visualize anything — fast, free, and beautifully.
                </p>

            </div>
        </div>

    </motion.div>
  )
}

export default Description
