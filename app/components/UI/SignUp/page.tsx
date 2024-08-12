import SignupFormDemo from "./signupForm"
import { Chivo } from "next/font/google"
import Logo from "@/assets/logo.svg"

const chivo = Chivo({ weight: "800", subsets: ["latin"] })

const SignUp = () => {
  return (
    <div className="w-full bg-[#F6F4EB]">
      <div className="h-screen flex flex-col items-center justify-center ">
        <div className="mb-16 flex justify-center w-full items-center">
          <Logo />
          <p className={`${chivo.className} text-2xl px-3`}>flowx.ai</p>
        </div>
        <SignupFormDemo />
      </div>
    </div>
  )
}

export default SignUp
