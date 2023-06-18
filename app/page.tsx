"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

import type { Database } from "@/lib/supabase"

export default function Index() {

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex items-center w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
        <Image 
          width={32}
          height={32}
          src="/logo.svg" 
          alt="ToDaily Logo"
          priority
        />
        <p className="flex ml-2 text-xl font-bold text-blue-800">ToDaily</p>
      </nav>
      <main className="flex-1 flex flex-col items-center justify-between">
      </main>
    </div>
  )
}