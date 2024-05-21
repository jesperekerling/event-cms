'use client'



import { useState } from "react";
import { ImagePicker } from "./image-picker";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";





export default function Edit({event}) {

    if(!event) return

const router = useRouter()

    const generateUploadUrl = useMutation(api.images.generateUploadUrl)
    const updateEvent = useMutation(api.events.updateEvent)
    const deleteEvent = useAction(api.events.deleteEvent)
    const deleteImage = useMutation(api.images.deleteImage)

    const [selectedImage, setSelectedImage] = useState(null) // ska det vara null??
    const [title, setTitle] = useState(event.title)
    const [description, setDescription] = useState(event.description)
    const [date, setDate] = useState(event.date)
    const [location, setLocation] = useState(event.location)
    const [price, setPrice] = useState(event.price)
    const [seats,setSeats] = useState(event.seats)

    

   
    const handleSubmit = async e => {
        e.preventDefault()

        if(title.trim() == '' || description.trim() == '' || date.trim() == '' || location.trim() == '' || price.trim() =='' || seats.trim() == '') 
            return
       
            let imgData

            if(selectedImage !== null) {

                try {
                    await deleteImage ({storageId: event.imageId})

                } catch (error) {
                    console.log(error.message)
                }

                const postUrl = await generateUploadUrl()
                const result = await fetch(postUrl, {
                    method: 'POST',
                    headers: {'Content-Type': selectedImage.type},
                    body: selectedImage,
                })

                imgData = await result.json()

            }

            await updateEvent({
                id: event._id,
                title,
                description,
                date,
                location,
                price,
                seats,
                imageId: imgData?.storageId ? imgData.storageId : event.imageId
            })

            setTitle('')
            setDescription('')
            setDate('')
            setLocation('')
            setPrice('')
            setSeats('')

        }

        const handleDelete = async () => {
            await deleteEvent({id: event._id})
        }



    return (

        <div>
          <ImagePicker setSelectedImage={setSelectedImage} imgSrc={imageSrc} setImageSrc={setImageSrc} />
          <Button variant="destructive" onClick={handleDelete} className="mt-6">Delete Event</Button>

          <form onSubmit={handleSubmit} className="mt-6">
            <div>
                <Label htmlFor="title">Title:</Label>
                <Input id="title" value={title} onChange={ e => setTitle(e.target.value)} />
                
                <Label htmlFor="description">Description:</Label>
                <Input id="description" value={description} onChange={ e => setDescription(e.target.value)} />

                <Label htmlFor="date">Date:</Label>
                <Input id="date" type="date" value={date} onChange={ e => setDate(e.target.value)} />

                <Label htmlFor="location">Location:</Label>
                <Input id="location" value={location} onChange={ e => setLocation(e.target.value)} />

                <Label htmlFor="price">Price:</Label>
                <Input id="price" type="number" value={price} onChange={ e => setPrice(e.target.value)} />

                <Label htmlFor="seats">Seats:</Label>
                <Input id="seats" type="number" value={seats} onChange={ e => setSeats(e.target.value)} />

            </div>
            <Button className="mt-6">Update Event</Button>
          </form>
        </div>
    )
}
