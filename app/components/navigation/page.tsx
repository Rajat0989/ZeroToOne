import { Button } from "../button"
import Logo from "../../../public/logo/logo.svg"
import { Chivo } from "next/font/google"

const chivo = Chivo({ weight: "800", subsets: ["latin"] })

const Nav = () => {
  return (
    <div className="h-16 w-full flex justify-center items-center">
      <div className="h-[3rem] max-w-[1536px] w-full flex items-center">
        <div className="w-full flex justify-between items-center px-6">
          <div className="flex items-center">
            <Logo />
            <p className={`${chivo.className} text-xl px-3`}>flowx.ai</p>
          </div>
          <div className="md:flex items-center text-sm font-semibold hidden ">
            <div className="px-5 py-2 hover:bg-[#e6e4d9] rounded-md transition duration-200 ease-linear">
              <a href="/">Product</a>
            </div>
            <div className="px-5 py-2 hover:bg-[#e6e4d9] rounded-md transition duration-200 ease-linear">
              <a href="/">Learn</a>
            </div>
            <div className="px-5 py-2 hover:bg-[#e6e4d9] rounded-md transition duration-200 ease-linear">
              <a href="/">About</a>
            </div>
          </div>
          <div className="hidden md:flex gap-x-4">
            <Button variant={"outline"} className="bg-white rounded-full">
              Login
            </Button>
            <Button className="bg-blue-600 rounded-full hover:bg-blue-800">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
