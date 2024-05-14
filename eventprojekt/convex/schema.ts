import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  events: defineTable({
    title: v.string(),
    // description: v.string(),
    // date: v.string(),
    // location: v.string(),
    // seats: v.number(),
    imageId: v.optional(v.id ("_storage"))
    // user: v.id("users"),
  })
//   users: defineTable({
//     name: v.string(),
//     tokenIdentifier: v.string(),
//   }).index("by_token", ["tokenIdentifier"]),
});