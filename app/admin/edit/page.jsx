'use client'

import { Toaster } from "react-hot-toast";
import Edit from "../_components/edit-form";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";




export default function EditPage() {

    const { id } = useParams()

    const event = useQuery(api.events.getById, { eventId: id })

   if(!event) return(
    <div>
        <p>Event not found</p>
    </div>
   )

    return (

       <div className="mx-10">
        <h1 className="text-6xl font-semibold text-center mb-10">Edit Event</h1>
        <Toaster />
        <Edit event={event}/>
       </div>
    )
}
