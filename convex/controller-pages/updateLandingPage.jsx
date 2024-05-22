import { mutation } from 'convex/server';

export default mutation(async ({ db }, { title, description }) => {
  await db.table('landingPageContent').set('SmtSJZhsEtgOrXbR2FDS', { title, description });
});