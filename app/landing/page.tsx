import React from "react"
import Hero from "@/components/UI/hero/page"
import Nav from "@/components/UI/navigation/page"
import Footer from "@/components/UI/footer/page"

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F6F4EB]">
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}

export default Landing
