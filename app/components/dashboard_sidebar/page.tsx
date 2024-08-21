import { Button } from "../button"
import Globe from "../../../public/icons/globe.svg"
import Logo from "../../../public/logo/logo.svg"
import { link } from "fs"

const DashboardSidebar = () => {
  return (
    <div className="h-screen w-[360px] bg-[#F6F4EB]">
      <div className="h-full w-full px-8 py-4 flex flex-col justify-between">
        <div className="">
          <div className="px-2 py-4">
            <Logo />
          </div>
          <div className="w-full flex flex-col">
            <div className="px-2 py-4 border-b border-slate-300">
              Create a team
            </div>
            <div className="font-medium px-2 py-4 border-b border-slate-300">
              Brainstrom Ideas
            </div>
            <div className="font-medium px-2 py-4 border-b border-slate-300">
              Generate Roadmap
            </div>
            <div className="font-medium px-2 py-4 border-b border-slate-300">
              Generate Document
            </div>
          </div>
        </div>
        <Button
          variant={"link"}
          className="justify-start p-0 h-auto text-slate-700"
        >
          <Globe className="w-5 h-5" />
          <span className="ml-2 text-xs">Explore Community</span>
        </Button>
      </div>
    </div>
  )
}

export default DashboardSidebar
