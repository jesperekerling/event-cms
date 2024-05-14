'use client'

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
// import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Create() {

    // const router = useRouter() 

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [seats, setSeats] = useState('');
    const [imageId, setImageId] = useState('');

    const createEvent = useMutation(api.events.createEvent)
    const uploadUrl = useMutation(api.images.generateUploadUrl)

    return (

        <div>
            <form onSubmit={ e => { e.preventDefault()
                createEvent({title, description, date, location, seats, imageId})
                setTitle('')
                setDescription('')
                setDate('')
                setLocation('')
                setSeats('')
                setImageId('')
            }}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                <input type="text" value={seats} onChange={(e) => setSeats(e.target.value)} />
                <input type="text" value={imageId} onChange={(e) => setImageId(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}


