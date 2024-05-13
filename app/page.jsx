'use client'
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import ListingEvents from "@/components/ListingEvents";

export default function Home() {
 

  return (
    <main >
        <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton /> 
          </SignedIn>
          <ListingEvents />
      
    </main>
  );
}
