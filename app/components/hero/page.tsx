'use client'
import { Button } from "../button"
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  return (
    <div className="h-full w-full max-w-[1280px] min-w-[440] bg-white rounded-md">
      <div className="w-full my-8">
        <div className="h-full w-full flex justify-between">
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:ml-8 mt-4 my-8 md:mb-12 text-4xl md:text-5xl xl:text-6xl relative z-20 text-slate-900 text-center lg:text-left tracking-tighter group font-normal">
              The{" "}
              <p className="group-hover:text-blue-600 group-hover:font-semibold group-hover:-translate-y-1 duration-300 transition-all ease-in-out inline-block">
                Only
              </p>{" "}
              Solution <br /> for your <br />
              <p className="group-hover:text-blue-600 group-hover:font-semibold group-hover:translate-y-1 duration-300 transition-all ease-in-out inline-block">
                Project Management
              </p>
            </div>
            <div className="w-full flex justify-center lg:justify-start lg:ml-8 text-base md:text-xl font-semibold">
              <Button onClick={() => router.push('/pages/dashboard')}>
                <span>Get Started</span>
              </Button>
            </div>
          </div>

          <div className="hidden lg:inline lg:w-1/3 z-20 mx-8">
            <div className="h-full w-full">
              <div className="h-full w-full flex justify-center items-center bg-gray-200 rounded-md">
                Image placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
