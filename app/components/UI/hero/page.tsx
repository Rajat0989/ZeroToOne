import React from "react"
import { Montserrat } from "next/font/google"
import { HoverBorderGradient } from "@/components/elements/hoverBorderGradient"

const montserrat = Montserrat({ weight: "800", subsets: ["latin"] })

const Hero = () => {
  return (
    <div className="max-w-[1280px] min-w-[440]">
      <div className="h-[24rem] sm:h-[28rem] md:h-[36rem] xl:h-[40rem] bg-white bg-grid-black/[0.15] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

        <div
          className={`${montserrat.className} text-3xl md:text-5xl xl:text-7xl relative z-20 py-6 md:py-16 px-8 lg:px-20 xl:px-32 text-center text-slate-900 tracking-tight`}
        >
          The <span className="text-blue-600">Only</span> Solution for
          <br /> your Project Management
        </div>

        <div className="text-2xl text-semibold">
          <HoverBorderGradient
            containerClassName="rounded-full"
            clockwise={true}
            duration={1}
            className="text-slate-900 bg-white flex items-center px-6 py-2"
          >
            Get Started
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  )
}

export default Hero
