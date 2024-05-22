import Image from "next/image";

import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Landingpage() {
  return (
    <main className="md:mx-14 my-7 mx-5">


<div className="flex items-center justify-center h-screen bg-gray-100">

    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to our Eventsite!</h1>
        
        <SignedOut>
        
                  <SignInButton asChild mode="modal" className="px-8 py-3 bg-blue-500 mb-4 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300" />
                
               
        <h4 className="text-xl text-gray-700">Please login for Access</h4>
      </SignedOut>

      <SignedIn>
      
      
      
      <UserButton/>
        <p>Your are Logged in!</p>
      </SignedIn>
       <button className="px-8 py-3 mt-3 mr-2 bg-blue-500 mb-4 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300">Create</button> 
       <button className="px-8 py-3 mt-3 bg-blue-500 mb-4 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300">View Events</button> 
       
      </div>

    </div>
    </div>
  
  

    </main>
  );
}
