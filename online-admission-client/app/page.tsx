import Hero from '@/components/ui/Hero';
import React from 'react'

type Props = {}

const testString = "just testing";

const Home = (props: Props) => {
  return (
    <div className='text-lg font-semibold '>
      <Hero />
    </div>
  )
}

export default Home;