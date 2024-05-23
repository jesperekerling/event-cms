import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  events: defineTable({
    title: v.string(),
    date: v.string(),
    description: v.string(),
    imageId: v.id("_storage"),
    location: v.string(),
    price: v.number(),
    seats: v.number(),
  }),
  changingLandingpage: defineTable({
    description: v.string(),
    title: v.string(),
  }),
});