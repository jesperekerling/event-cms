import { api } from "@/convex/_generated/api"
import { preloadQuery, preloadedQueryResult } from "convex/nextjs"


export const pageData = async (editPage) => {
  const preloaded = await preloadQuery(api.pages.getPage, { name: editPage })
  const pageData = preloadedQueryResult(preloaded)

  const content = JSON.parse(pageData?.content)
  return { name: pageData.name, ...content }
}