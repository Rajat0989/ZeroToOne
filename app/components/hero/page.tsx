import { HoverBorderGradient } from "@/components/hoverBorderGradient"

const Hero = () => {
  return (
    <div className="h-full w-full max-w-[1280px] min-w-[440]">
      <div className="w-full my-8">
        <div className="h-full w-full flex justify-between">
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:ml-8 my-8 md:my-12 text-4xl md:text-5xl xl:text-6xl relative z-20 text-slate-900 text-center lg:text-left tracking-tighter group font-normal">
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
              <HoverBorderGradient
                containerClassName="rounded-full"
                clockwise={true}
                duration={1}
                className="text-slate-900 bg-white flex items-center px-5 py-2"
              >
                Get Started
              </HoverBorderGradient>
            </div>
          </div>

          <div className="hidden lg:inline lg:w-1/2 z-20 mx-8">
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
