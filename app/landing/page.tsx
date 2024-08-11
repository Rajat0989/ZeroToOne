"use client"
import React from "react"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { TracingBeam } from "../components/elements/tracingBeam"
import Hero from "@/components/UI/hero/page"
import Nav from "@/components/UI/navigation/page"
import Footer from "@/components/UI/footer/page"
import X from "@/components/UI/untitled/pages"
import X1 from "@/components/UI/untitled1/pages"

const Landing = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#F6F4EB]">
      <Nav />
      <div>
        <TracingBeam>
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
