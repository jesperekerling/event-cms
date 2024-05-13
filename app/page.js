import Image from "next/image";
import imageSrc from "./assets/img/event.jpg";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="md:mx-14 my-7 mx-5">

      <div>
        <h1 className="text-3xl font-semibold pb-5">
          Event list
        </h1>
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
          <article className="">
            <Image
              src={imageSrc}
              alt="Event Picture"
              width={300}
              height={250}
              className="w-full pb-2"
            />
            <span className="font-bold text-lg block flex-1">
              Bruce Springsteen Ullevi, Göteborg
            </span>
            <div className="flex py-1">
              <span className="text-gray-500 text-sm font-semibold flex-1">18 jun, 2024</span>
              <span className="text-gray-500 text-sm font-semibold">99 USD</span>
            </div>
            <div className="flex">
              <span className="text-sm">
                34 spots left
              </span>
            </div>
          </article>
          <article className="">
            <Image
              src={imageSrc}
              alt="Event Picture"
              width={300}
              height={250}
              className="w-full pb-2"
            />
            <span className="font-bold text-lg block flex-1">
              Bruce Springsteen Ullevi, Göteborg
            </span>
            <div className="flex py-1">
              <span className="text-gray-500 text-sm font-semibold flex-1">18 jun, 2024</span>
              <span className="text-gray-500 text-sm font-semibold">99 USD</span>
            </div>
            <div className="flex">
              <span className="text-sm">
                34 spots left
              </span>
            </div>
          </article>
          <article className="">
            <Image
              src={imageSrc}
              alt="Event Picture"
              width={300}
              height={250}
              className="w-full pb-2"
            />
            <span className="font-bold text-lg block flex-1">
              Bruce Springsteen Ullevi, Göteborg
            </span>
            <div className="flex py-1">
              <span className="text-gray-500 text-sm font-semibold flex-1">18 jun, 2024</span>
              <span className="text-gray-500 text-sm font-semibold">99 USD</span>
            </div>
            <div className="flex">
              <span className="text-sm">
                34 spots left
              </span>
            </div>
          </article>
          <article className="">
            <Image
              src={imageSrc}
              alt="Event Picture"
              width={300}
              height={250}
              className="w-full pb-2"
            />
            <span className="font-bold text-lg block flex-1">
              Bruce Springsteen Ullevi, Göteborg
            </span>
            <div className="flex py-1">
              <span className="text-gray-500 text-sm font-semibold flex-1">18 jun, 2024</span>
              <span className="text-gray-500 text-sm font-semibold">99 USD</span>
            </div>
            <div className="flex">
              <span className="text-sm">
                34 spots left
              </span>
            </div>
          </article>
          <article className="">
            <Image
              src={imageSrc}
              alt="Event Picture"
              width={300}
              height={250}
              className="w-full pb-2"
            />
            <span className="font-bold text-lg block flex-1">
              Bruce Springsteen Ullevi, Göteborg
            </span>
            <div className="flex py-1">
              <span className="text-gray-500 text-sm font-semibold flex-1">18 jun, 2024</span>
              <span className="text-gray-500 text-sm font-semibold">99 USD</span>
            </div>
            <div className="flex">
              <span className="text-sm">
                34 spots left
              </span>
            </div>
          </article>
          <article className="">
            <Image
              src={imageSrc}
              alt="Event Picture"
              width={300}
              height={250}
              className="w-full pb-2"
            />
            <span className="font-bold text-lg block flex-1">
              Bruce Springsteen Ullevi, Göteborg
            </span>
            <div className="flex py-1">
              <span className="text-gray-500 text-sm font-semibold flex-1">18 jun, 2024</span>
              <span className="text-gray-500 text-sm font-semibold">99 USD</span>
            </div>
            <div className="flex">
              <span className="text-sm">
                34 spots left
              </span>
            </div>
          </article>
        </div>
      </div>
      
      <SignedOut>
        <p>You are: Logged Out</p>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton /> 
        <p>You are: Logged in</p>
      </SignedIn>

    </main>
  );
}
