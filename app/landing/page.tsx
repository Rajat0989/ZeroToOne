import React from "react"
import Hero from "@/components/UI/hero/page"
import Nav from "@/components/UI/navigation/page"

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F6F4EB]">
      <Nav />
      <Hero />
    </div>
  )
}

export default Landing
