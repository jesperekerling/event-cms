import { api } from "@/convex/_generated/api";
import { fetchMutation } from "convex/nextjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, date, location, seats, imageId } = request.body;

    const newEvent = await fetchMutation(api.events.createEvent, {
      title,
      description,
      date,
      location,
      seats,
      imageId,
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred while creating the event.' }, { status: 500 });
  }
}