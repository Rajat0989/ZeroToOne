import { Textarea } from "@/components/textarea"
import { Button } from "@/components/button"

const Brainstorm = () => {
  return (
    <div className="h-screen w-full flex justify-center bg-[#F6F4EB]">
      <div className="w-full max-w-[1280px] min-w-[440]">
        <div className="mt-20 w-full flex justify-center">
          <div className="">
            <Textarea
              placeholder="Start describing your idea...."
              className="w-[500px]"
            />
            <Button className="w-full mt-3">
                Generate Ideas
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brainstorm
