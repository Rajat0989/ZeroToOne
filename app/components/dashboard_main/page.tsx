import { Input } from "../input"
import { Button } from "../button"
import { Avatar } from "../avatar"
import { AvatarFallback } from "../avatar"

const DashboardMain = () => {
  return (
    <div className="h-screen w-full bg-[#F6F4EB]">
      <nav className="w-full p-4 flex justify-between items-center gap-x-4">
        <Input
          placeholder="Search for a project"
          type="text"
          className="max-w-[660px] outline-none"
        />
        <div className="flex items-center gap-x-4">
          <Button>New Project</Button>
          <Avatar>
            <AvatarFallback>RC</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <h3 className="px-4 py-2 text-4xl font-medium ">My Projects</h3>
      <div className="px-4 py-2">list of projects....</div>
    </div>
  )
}

export default DashboardMain
