import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  events: defineTable({
    event: v.object({
      title: v.string(),
      date: v.string(),
      description: v.string(),
      imageId: v.id("_storage"),
      location: v.string(),
      price: v.float64(),
      seats: v.float64(),
     
    }),
  }),
});