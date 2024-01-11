import Search from '@/components/shared/Search'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="bg-contain py-5 md:py-10 bg-[#0B2033]">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col  gap-2 md:mt-5  2xl:mt-10">
            <h1 className="h1-bold text-[#7B5D47]">Find din næste freelancer</h1>
            <p className="p-regular-20 text-[#957B71] md:p-regular-24 mb-32">Talenter der skaber værdi for 
            dit projekt, vælg blandt en bred vifte af kompetencer</p>
            <Search placeholder='søg kategori eller '/>

            <Button size="lg" className="button w-full sm:w-40 bg-gray-500 mt-10">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[65vh] object-contain object-right 2xl:max-h-[70vh]"
          />
        </div>
      </section>
    </>
  )
}
