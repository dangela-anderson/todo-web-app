"use client"

import { Fragment, useEffect, useState } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Cog8ToothIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import Image from "next/image"

interface DashboardProps {
    children: React.ReactNode
}

export default function Dashboard({ children }: DashboardProps) {
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    useEffect(() => {  
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }

        getUser()
    }, [])

    return (
        <div className="flex min-h-screen flex-col">
            <Disclosure as="nav" className="bg-white border-b border-b-slate-200 shadow-md">
                <>
                    { user?.email ?? "Herro"}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-stretch justify-start">
                            <Link href="/dashboard" className="flex flex-shrink-0 items-center">
                                <Image
                                    width={32}
                                    height={32}
                                    src="/logo.svg"
                                    alt="ToDaily Logo"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="flex focus:outline-none">
                                    <span className="sr-only">Open user menu</span>
                                    <div className="flex items-center justify-center font-bold h-8 w-8 bg-slate-200 rounded-full mr-4 text-slate-500">D</div>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute w-56 divide-y divide-solid right-0 z-10 my-2 origin-top-right rounded-sm bg-white py-2 px-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        <div className="flex flex-col py-2">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start justify-center flex-col py-2">
                                                    <strong className="text-sm w-48 truncate">{"D'Angela Anderson"}</strong>
                                                    <span className="text-xs text-slate-700 w-48 truncate">dangelaanderson@outlook.com</span>
                                                </div>
                                            </div>
                                            <Link
                                                href="/dashboard/settings"
                                                className="inline-flex w-full items-center justify-center mx-auto mt-1 px-2 py-1  text-xs text-slate-700 border rounded-sm border-slate-400"
                                            >
                                                <Cog8ToothIcon className="fill-slate-400 w-4 h-4 mr-2"/>
                                                Edit profile settings
                                            </Link>
                                        </div>     
                                    </Menu.Item>
                                    <Menu.Item>
                                        <div className="w-full">
                                            <button
                                                onClick={handleSignOut}
                                                className="inline-flex w-full items-center justify-center mx-auto mt-3 px-4 py-2 text-sm text-white bg-blue-700 rounded-sm"
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                            </Menu>
                        </div>
                        </div>
                    </div>
                </>
            </Disclosure>
            <main className="flex-1 flex flex-col items-center justify-between bg-slate-100">{children}</main>
        </div>
    )
}
