"use client"
import React from "react"
import Hero from "@/components/hero/page"
import Nav from "@/components/navigation/page"
import Footer from "@/components/footer/page"
import FAQs from "@/components/FAQs/page"

const Landing = () => {
  return (
    <div className="overflow-hidden h-full flex flex-col items-center justify-center bg-[#F2F9FC]">
      <Nav />
      <Hero />
      <FAQs />
      <Footer />
    </div>
  )
}

export default Landing
