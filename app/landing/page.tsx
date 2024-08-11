"use client"
import React from "react"
import { TracingBeam } from "../components/elements/tracingBeam"
import Hero from "@/components/UI/hero/page"
import Nav from "@/components/UI/navigation/page"
import Footer from "@/components/UI/footer/page"
import X from "@/components/UI/untitled/page"
import X1 from "@/components/UI/untitled1/page"

const Landing = () => {
  return (
    <div className="overflow-hidden h-full flex flex-col items-center justify-center bg-[#F6F4EB]">
      <Nav />
      <div>
        <TracingBeam className="">
          <Hero />
          <X />
          <X1 />
        </TracingBeam>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
