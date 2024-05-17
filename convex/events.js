import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const createEvent = mutation({
    args: {
        title: v.string(),
        description: v.string(),
        date: v.string(),
        location: v.string(),
        price: v.string(),
        seats: v.string(),
        imageId: v.id ("_storage"),
        
    },
    
    handler: async (ctx, title, description, date, location, price, seats, imageId) => {
        const identity = await ctx.auth.getUserIdentity()
        if (!identity) 
            throw new ConvexError("Unauthenticated")
        
        await ctx.db.insert("events", { imageId, title, description, date, location, price, seats})

    }
})

export const getAll = query({
    args: {},
    handler: async (ctx) => {
        
        const events = await ctx.db.query("events").collect()

        const eventsImageUrls = await Promise.all(events.map(async (event) => {
            let imageUrl = null;
            try {
                imageUrl = await ctx.storage.getUrl(event.imageId);
            } catch (error) {
                console.error(`Failed to get image URL for imageId ${event.imageId}: ${error}`);
            }

            return {
                ...event,
                image: imageUrl
            };
        }))

        return eventsImageUrls
    }
})


// export const getById = query({
//     args: {
//         eventId: v.id("events")
//     },
//     handler: async (ctx, { eventId }) => {
//         const event = await ctx.db.get("events", eventId)
       
//         let imageUrl = null;
//         try {
//             imageUrl = await ctx.storage.getUrl(event.imageId);
//         } catch (error) {
//             console.error(`Failed to get image URL for imageId ${event.imageId}: ${error}`);
//         }
        
//         return {
//               ...event,
//               image: await ctx.storage.getUrl(event.imageId)
//        }
//     }
// })