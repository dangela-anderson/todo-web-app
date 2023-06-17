"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import type { Database } from "../lib/database.types"
import { PlusIcon } from "@heroicons/react/24/outline"
import CreateTaskModal from "../components/CreateTaskModal"
import EmptyState from "../components/EmptyState"


type Task = Database["public"]["Tables"]["Tasks"]["Row"]

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("Tasks").select()
      setTasks(data)
    }

    getData()
  }, [])

  return (
    <div className="flex-1 flex flex-col w-full justify-start gap-y-10 py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex w-full items-center justify-between">
        <h1 className="flex items-center justify-center text-lg font-bold">
          Recent Tasks 
          <p className="ml-2 text-sm font-light">({ tasks ? tasks.length : 0 })</p>
        </h1>
        {
          tasks && tasks.length > 0 && 
          <button 
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-blue-700 rounded-sm"
          >
            <PlusIcon className="stroke-2 w-4 h-4 mr-2"/>
            New Task
          </button>
        }
      </div>
      <div>
      {
        tasks && tasks.length ?
        <></>
        : <EmptyState setOpen={setOpen}/>
      }
      </div>
      {
        open && 
        <CreateTaskModal open={open} setOpen={setOpen}/>
      }
    </div>
  )
  
}