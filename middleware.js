import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/admin/events',  
  
])

const isAdminRoute = createRouteMatcher([  // Admins routes
  '/admin/create', // alla admin sidor ---> '/admin/(.*)',
  
]);


export default clerkMiddleware((auth, req) => {
  // Restrict admin routes to users with specific permissions
 // if (isAdminRoute(req)) 
    
     // return NextResponse.redirect('/') // Om vi inte är Administratörer så går vi tillbaka till startsidan 
      
    })
  
  // Restrict organization routes to signed in users
  //if (isProtectedRoute(req) || isAdminRoute(req)) auth().protect(); 
;

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};