import React from 'react'
import { useQuery } from "convex/react"
import { api } from "../convex/_generated/api"




const ListingEvents = () => {
    const events = useQuery(api.events.getEvents)

    return (
        <>
            <div className="flex flex-wrap justify-around">
                {events?.map((event) => (
                    <div key={event._id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        
                            <li>{event.title}</li>

                            {/* <li>{event.image}</li>
                            <li>{event.date}</li> */}

                            <li>{event.description}</li>
                            <li>{event.location}</li>
                </div>
                ))}
            </div>
        </>
    )
}

export default ListingEvents