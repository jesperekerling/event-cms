import Image from "next/image";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main >
      <h1>Hello, World!</h1>
        <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton /> 
          </SignedIn>
      
    </main>
  );
}
