import Search from '@/components/shared/Search'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="py-5 md:py-10 bg-[#0B2033]">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left text-[#7B5D47]">Find din næste freelancer</h1>
            <p className="text-2xl text-center lg:max-w-md lg:text-left text-[#957B71] ">Talenter der skaber værdi for
              dit projekt, vælg blandt en bred vifte af kompetencer</p>
            <Search placeholder='søg kategori eller ' />

            <Button size="lg" className="button w-full sm:w-40 bg-gray-500 mt-10">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
          <div className='  mx-auto lg:w-1/2   '>
            <Image
              src="/assets/images/hero.png"
              alt="hero"
              className='object-contain object-center  xl:object-right  max-h-[80vh]  2xl:max-h-[80vh]'
              width={800}
              height={1000}
            />
          </div>
        </div>
      </section>
    </>
  )
}
/**  <Image
            src="/assets/images/hero.jpg"
            alt="hero"
            width={800}
            height={800}
            className="max-h-[600px] object-contain object-center xl:object-right"
          /> */

/**
 *   <img className='float-right max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg' src="/assets/images/hero.png"   alt="hero-image"/>
 * <div className='float-right mx-auto lg:w-1/2 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg'>
 */