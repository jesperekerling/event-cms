import { mutation } from "../_generated/server";
import { query } from "../_generated/server";

export const getLandingPageContent = query(async ({ db }) => {
  const doc = await db.collection('changingLandingpage').findOne();
  return doc || { title: '', description: '' };
});

export const setLandingPageContent = mutation(async ({ db }, { title, description }) => {
  const existingDoc = await db.collection('changingLandingpage').findOne();
  if (existingDoc) {
    await db.collection('changingLandingpage').replaceOne(existingDoc._id, { title, description });
  } else {
    await db.collection('changingLandingpage').insertOne({ title, description });
  }
});

