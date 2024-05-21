'use client'

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export const AllEvents = () => {

  const events = useQuery(api.events.getAll)

  return (
    <div className="">
      <Link href="/admin/create">
        <Button className="mt-6">Create event</Button>
      </Link>

      {events?.map(event => (
        <Link href={'/admin/'+event._id} key={event._id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition">
          <div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
            {event.image ? (
              <Image 
                src={event.image}
                width={64}
                height={64}
                alt={event.title}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <p className="flex-1 text-gray-600 truncate">{event.description.substring(0, 50)}</p>
                <span className="flex-1">{event.location}</span>
                <span className="flex-1">{new Date(event.date).toLocaleDateString()}</span>
                <span className="flex-1 ml-5">${event.price}</span>
                <span className="flex-1">{event.seats} seats</span>
              </div>
          </div>
        </Link>
      ))}
    </div>
  )
}