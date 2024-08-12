"use client"
import React from "react"
import { Label } from "./label"
import { Input } from "./input"
import { cn } from "@/lib/utils"
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="text-4xl text-slate-900 dark:text-neutral-200">Sign up</h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white block relative group/btn w-full rounded-md h-10 font-medium"
          type="submit"
        >
          Continue
        </button>

        <div className="relative my-8">
          <div className="absolute -top-2 w-full flex justify-center">
            <div className="bg-white px-2 text-sm">OR</div>
          </div>
          <div className="bg-gradient-to-r from-transparent via-slate-400 dark:via-slate-700 to-transparent h-[1px] w-full" />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex justify-center space-x-2 items-center px-4 w-full text-slate-700 rounded-md h-10 font-medium shadow-input bg-[#F6F4EB] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Sign up with GitHub
            </span>
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-slate-700 rounded-md h-10 font-medium shadow-input bg-[#F6F4EB] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Sign up with Google
            </span>
          </button>
        </div>
      </form>

      <div className="flex justify-center text-sm text-slate-500">
        <div>
          Already have an account?{" "}
          <a href="/" className="hover:underline text-slate-800">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  )
}
