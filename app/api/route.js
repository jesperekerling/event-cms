import { api } from "@/convex/_generated/api";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, date, location, price, seats, imageId } = request.body;

    const newEvent = await fetchMutation(api.events.createEvent, {
      title,
      description,
      date,
      location,
      price,
      seats,
      imageId,
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred while creating the event.' }, { status: 500 });
  }
}

export async function GET(request) {

  try {
    const events = await fetchQuery(api.events.getAll);
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred while fetching the events.' }, { status: 500 });
  }
}