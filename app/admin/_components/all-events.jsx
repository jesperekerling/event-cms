'use client'

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Image from "next/image"
import Link from "next/link"

export const AllEvents = () => {

  const events = useQuery(api.events.getAll)

  return (
    <div className="flex flex-col gap-2">
      {events?.map(event => (
        <Link href={'/admin/'+event._id} key={event._id} className="h-16 flex items-center justify-between cursor-pointer group hover:bg-slate-50/10 rounded pr-4">
          <div className="h-full aspect-square overflow-auto rounded">
            {
              event.image
              ? (
                <Image 
                  src={event.image}
                  width={200}
                  height={200}
                  alt={event.title}
                  className="object-cover h-full w-full"
                />
              )
              : (
                <div className="w-full h-full bg-neutral-50/10 flex items-center justify-center">
                 
                </div>
              )
            }
            
          </div>
          <p>{event.title}</p>
          <p>{event.description}</p>
            <p>{event.date}</p> 
            <p>{event.location}</p>
            <p>{event.price}</p>
            <p>{event.seats}</p>

        </Link>
      ))}
    </div>
  )
}