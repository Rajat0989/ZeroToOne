import Logo from "../../../public/logo/logo.svg"
import { Chivo } from "next/font/google"

const chivo = Chivo({ weight: "800", subsets: ["latin"] })

const Footer = () => {
  return (
    <div className="h-full w-full border-t border-slate-300 flex items-center justify-center">
      <div className="h-full w-full max-w-[1280px] min-w-[440] m-8">
        <div className=""></div>
        <div className="flex justify-between flex-wrap gap-x-3">
          <div>
            <div className="font-semibold text-slate-700 mb-2">
              Getting Started
            </div>
            <ul className="text-slate-500 flex flex-col gap-y-1 text-sm">
              <li>What&apos;s New</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-700 mb-2">
              Resourses
            </div>
            <ul className="text-slate-500 flex flex-col gap-y-2 text-sm">
              <li>Docs</li>
              <li>Guides</li>
              <li>Blogs</li>
              <li></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-700 mb-2">
              About
            </div>
            <ul className="text-slate-500 flex flex-col gap-y-2 text-sm">
              <li>Contact</li>
              <li>Support</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-700 mb-2">
              Community
            </div>
            <ul className="text-slate-500 flex flex-col gap-y-2 text-sm">
              <li>Github</li>
              <li>X (Twitter)</li>
              <li>Youtube</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <Logo />
          <p className={`${chivo.className} text-2xl px-3`}>flowx.ai</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
