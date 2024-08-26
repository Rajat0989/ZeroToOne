import Image from "next/image"
import Globe from "../../../public/icons/globe.svg"
import Logo from "../../../public/logo/logo.svg"
import Brainstorm from "../../../public/icons/brainstorm.svg"
import ChatWithCode from "../../../public/icons/chatwithcode.svg"
import DocGen from "../../../public/icons/doc.svg"
import Roadmap from "../../../public/icons/roadmap.svg"
import Plus from "../../../public/icons/plus.svg"
import { Button } from "../button"

const DashboardSidebar = () => {
  return (
    <div className="h-screen w-[400px] bg-[#F6F4EB]">
      <div className="h-full w-full px-8 py-4 flex flex-col justify-between">
        <div className="">
          <div className="px-2 py-4">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="w-full flex flex-col">
            <div className="font-medium px-2 py-4 border-b border-slate-300 flex items-center">
              <Image src={Plus} alt="Icon" className="h-8 w-8"></Image>
              <span className="ml-2">Create a team</span>
            </div>
            <a
              href="/pages/brainstorm"
              className="font-medium px-2 py-4 border-b border-slate-300 flex items-center"
            >
              <Image src={Brainstorm} alt="Icon" className="h-8 w-8"></Image>
              <span className="ml-2">Brainstorm Ideas</span>
            </a>
            <div className="font-medium px-2 py-4 border-b border-slate-300 flex items-center">
              <Image src={Roadmap} alt="Icon" className="h-8 w-8"></Image>
              <span className="ml-2">Generate Roadmap</span>
            </div>
            <div className="font-medium px-2 py-4 border-b border-slate-300 flex items-center">
              <Image src={ChatWithCode} alt="Icon" className="h-8 w-8"></Image>
              <span className="ml-2">Chat with your Code</span>
            </div>
            <a
              href="/pages/doc_gen"
              className="font-medium px-2 py-4 border-b border-slate-300 flex items-center"
            >
              <Image src={DocGen} alt="Icon" className="h-8 w-8"></Image>
              <span className="ml-2">Generate Report</span>
            </a>
          </div>
        </div>
        <Button
          variant={"link"}
          className="justify-start p-0 h-auto text-slate-700"
        >
          <Image src={Globe} alt="Globe" className="w-5 h-5" />
          <span className="ml-2 text-xs">Explore Community</span>
        </Button>
      </div>
    </div>
  )
}

export default DashboardSidebar
