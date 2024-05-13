import Image from "next/image";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton /> 
      </SignedIn>

    </main>
  );
}
