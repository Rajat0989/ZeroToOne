import React from "react"
import { Montserrat } from "next/font/google"
import { HoverBorderGradient } from "@/components/hoverBorderGradient"

const montserrat = Montserrat({ weight: "800", subsets: ["latin"] })

const Hero = () => {
  return (
    <div className="max-w-[1280px] min-w-[440]">
      <div className="mt-8 h-[20rem] md:h-[28rem] xl:h-[36rem] bg-grid-black/[0.15] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#F6F4EB] [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>

        {/* <div className="h-7 md:h-11 flex items-center rounded-full bg-gradient-to-r from-[#4A249D] from-10% via-[#06D001] via-50% to-[#F5004F] to-90%">
          <div className="bg-white h-6 md:h-10 flex items-center mx-1 px-2 xl:px-4 rounded-full text-xs md:text-base xl:text-xl font-semibold">
            Make your Project journey a lot smoother with flowX
          </div>
        </div> */}

        <div
          className={`${montserrat.className} text-3xl md:text-5xl xl:text-7xl relative z-20 my-6 md:my-16 mx-8 lg:mx-16 xl:mx-32 text-center text-slate-900 tracking-tight group`}
        >
          The{" "}
          <p className="text-blue-600 group-hover:-translate-y-3 duration-300 transition-all ease-in-out inline-block">
            Only
          </p>{" "}
          Solution for
          <br /> your Project Management
        </div>

        <div className="text-base md:text-xl font-semibold">
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
    </div>
  )
}

export default Hero
