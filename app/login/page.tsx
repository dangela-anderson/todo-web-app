"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

import type { Database } from "@/lib/supabase"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  return (
    <main className="flex-1 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-100 lg:bg-white w-full h-full">
        <div className="mt-5 grid w-full gap-x-6 gap-y-8 grid-cols-6 max-w-sm md:max-w-md bg-white rounded-sm px-6 py-10 lg:p-0">
          <div className="flex items-center col-span-full">
            <Image 
              className="block h-5 w-auto" 
              width={20}
              height={20}
              src="/logo.svg" 
              alt="ToDaily Logo"
              priority
            />
            <Link href="/" className="flex ml-2 text-md font-bold text-blue-800">ToDaily</Link>
          </div>
          <div className="col-span-full">
            <h1 className="text-2xl font-semibold">Welcome To ToDaily!</h1>
            <h1 className="text-sm text-slate-500">New to ToDaily? <Link href="/" className="text-blue-700">Sign up</Link></h1>
          </div>
          <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email Address
              </label>
              <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-sm md:max-w-md">
                  <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(event) => setEmail(event.target.value)} value={email}
                      className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2"
                      placeholder=" Organize and Clean Kitchen Pantry"
                  />
                  </div>
              </div>
          </div>

          <div className="col-span-full">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-sm md:max-w-md">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(event) => setPassword(event.target.value)} value={password}
                        className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-2"
                        placeholder=" Organize and Clean Kitchen Pantry"
                    />
                  </div>
              </div>
          </div>

          <div className="col-span-full">
            <button 
              className="block w-full rounded-sm border-0 py-1.5 text-white shadow-sm bg-blue-700 sm:text-sm sm:leading-6 px-2 max-w-sm md:max-w-md"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>

        </div>
      </div>
      <div className="lg:block w-full h-full hidden bg-blue-700 text-white">
        Hi
      </div>
    </main>
  )
}