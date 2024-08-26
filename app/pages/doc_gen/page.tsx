import React from "react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/alert-dialog"
import { Input } from "@/components/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/select"

const Docgen = () => {
  return (
    <div className="h-screen w-full flex justify-center bg-[#F6F4EB]">
      <div className="w-full max-w-[1280px] min-w-[440]">
        <div className="w-full flex justify-center mt-20">
          <AlertDialog>
            <AlertDialogTrigger className="bg-slate-700 px-4 py-2 rounded-sm text-white">
              Generate Report
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Input
                  placeholder="Paste link to your GitHub respsitory"
                  type="text"
                ></Input>
                <label className="px-2 pt-4 text-xs text-slate-700">Number of Words</label>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="100-500" className=""/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100-500">100-500</SelectItem>
                    <SelectItem value="501-1000">501-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Generate</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

export default Docgen
