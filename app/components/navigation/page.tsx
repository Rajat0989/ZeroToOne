import { Button } from "../button"
import Logo from "../../../public/logo/logo.svg"
import { Chivo } from "next/font/google"
import Link from "next/link"

const chivo = Chivo({ weight: "800", subsets: ["latin"] })

const Nav = () => {
  return (
    <div className="h-[4rem] md:h-[5rem] xl:h-[6rem] w-full border-b border-slate-300 flex justify-center items-center">
      <div className="h-[3rem] max-w-[1536px] w-full flex items-center">
        <div className="w-full flex justify-between items-center px-6 text-lg">
          <div className="flex items-center">
            <Logo />
            <p className={`${chivo.className} text-2xl px-3`}>flowx.ai</p>
          </div>
          <div className="md:flex items-center gap-x-2 hidden ">
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
          <div className="hidden md:flex">
          <Link href='/components/Login'>
            <Button
              variant={"outline"}
              className="bg-white mr-5 rounded-full border-slate-300 border-[1px] p-6"
            >
                Login
            </Button>
            </Link>
            <Link href='/components/SignUp'>
              <Button className="bg-blue-600 rounded-full hover:bg-blue-800 p-6">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
