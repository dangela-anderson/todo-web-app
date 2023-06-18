"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/supabase"

export const metadata = {
    title: "Settings - ToDaily",
}

export default function Settings() {
    const supabase = createClientComponentClient<Database>()

    const handleDeleteAccount = async () => {
        // await supabase.auth.admin.deleteUser()
    }

    return (
    <div className="flex-1 flex flex-col w-full justify-start gap-y-10 py-10 mx-auto mt-10 max-w-7xl rounded-sm px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Profile Information</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-red-600">Delete account</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <button className="px-4 py-2 text-white inline-flex bg-red-600 text-white rounded-sm shadow-sm" onClick={handleDeleteAccount}>
                            Delete account
                        </button>
                    </dd>
                </div>
            </dl>
            </div>
        </div>
    </div>
    )
}
