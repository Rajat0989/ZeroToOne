import LoginForm from "../../components/login/form"
import { Chivo } from "next/font/google"
import Logo from "../../../public/logo/logo.svg"

const chivo = Chivo({ weight: "800", subsets: ["latin"] })

const Login = () => {
  return (
    <div className="w-full bg-[#F2F9FC]">
      <div className="h-screen flex flex-col items-center justify-center ">
        <div className="mb-16 flex justify-center w-full items-center">
          <Logo />
          <p className={`${chivo.className} text-2xl px-3`}>flowx.ai</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login