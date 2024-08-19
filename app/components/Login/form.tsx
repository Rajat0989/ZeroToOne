"use client"
import React, { useEffect, useState } from "react"
import { Label } from "./label"
import { Input } from "./input"
import { cn } from "@/lib/utils"
import axios from "axios"
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import Github from "../../../public/icons/github.svg"
import {auth} from '../../../firebase/firebase'
import Google from "../../../public/icons/google.svg"

export default function SignupFormDemo() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });


  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
    }catch(error: any){
      console.log("Login failed", error);
    }
    console.log("Form submitted")
  }

  const handleOAuthLogin = async (provider: string) => {
    let authProvider;

    if(provider == "google"){
      authProvider = new GoogleAuthProvider();
    }
    if(provider == "github"){
      authProvider = new GithubAuthProvider();
    }

    try {
      const result = await signInWithPopup(auth, authProvider!);
      const user = result.user;

      // You can optionally send the user token to your backend for additional processing
      const token = await user.getIdToken();
      console.log("User Token:", token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  },[user.email.length, user.password.length])
  
  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="text-4xl text-slate-900 dark:text-neutral-200">Login</h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={(e) => setUser({...user, email: e.target.value})} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setUser({...user, password: e.target.value})} />
        </LabelInputContainer>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white block relative group/btn w-full rounded-md h-10 font-medium"
          type="submit"
        >
          login
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
            onClick={() => handleOAuthLogin("github")}
          >
            <Github className="h-8 w-8 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Continue with GitHub
            </span>
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-slate-700 rounded-md h-10 font-medium shadow-input bg-[#F6F4EB] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={() => handleOAuthLogin("google")}
          >
            <Google className="h-8 w-8 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Continue with Google
            </span>
          </button>
        </div>
      </form>

      <div className="flex justify-center text-sm text-slate-500">
        <div>
          Don&apos;t have an account?{" "}
          <a href="/components/SignUp" className="hover:underline text-slate-800">
            Sign up
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
