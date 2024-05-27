import { ConvexError, v } from "convex/values";
import { mutation, query, internalMutation } from "./_generated/server";
import { api, internal } from "./_generated/api";



export const getAll = query({
    handler: async (ctx) => {
      return await ctx.db.query("posts").collect()
    }
  })

  export const updatePosts = mutation({
    args: {
        title: v.string(),
        description: v.string(),
        
        
    },
    
    handler: async (ctx, {title, description}) => {
        const identity = await ctx.auth.getUserIdentity()
        if (!identity) 
            throw new ConvexError("Unauthenticated")
        
        await ctx.db.insert("posts", { title, description, postId})
      
  
    }
  })
