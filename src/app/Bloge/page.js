import Image from "next/image";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center  h-screen">
        {/* <Blogecard3></Blogecard3> */}
        <Blogecard></Blogecard>
        {/* <Blogecard2></Blogecard2> */}
      </div>
    </div>
  );
}

// this is the navbar function
export function Navbar() {
  return (
    <div
      className="w-full h-[65px] bg-background px-3 md:px-5
            flex justify-between items-center"
    >
      <div className="w-[180px] flex justify-start items-center gap-x-1">
        <p className="font-black md:text-3xl">k-Fonts</p>
      </div>

      <div className="flex justify-center items-center gap-x-6 flex-1 w-full font-bold md:text-3xl">
        <Link
          href="/"
          className="hover:underline hover:text-gray-800 md:mx-10  "
        >
          Home
        </Link>

        <Link
          href="/Bloge"
          className="hover:underline hover:text-gray-800 md:mx-10"
        >
          Bloge
        </Link>

        <Link
          href="/more"
          className="hover:underline hover:text-gray-800 md:mx-10"
        >
          More
        </Link>
      </div>

      <div className="w-[180px] flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}

export function Blogecard() {
  return (
    <Card className="md:w-[40%] w-[90%]  mt-20">
      <CardHeader>
        <Image
          src="/creative.jpg"
          alt="a photo of a font"
          width={600}
          height={300}
        ></Image>
        <CardTitle>
          Unlock Your Creativity with 1400+ Unique Kurdish Fonts: A Typeface
          Treasure Trove
        </CardTitle>
        <CardDescription>
          Discover an extensive collection of over 1400 unique Kurdish fonts
          ready for download! Explore the ultimate destination for Kurdish
          typeface enthusiasts and elevate your design projects with stunning,
          culturally rich fonts.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Link href="/Bloge/Unlock-Your-Creativity">
          {" "}
          <Button className="w-40">read</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
export function Blogecard2() {
  return (
    <Card className="md:w-[40%] w-[90%]  mt-20">
      <CardHeader>
        <Image
          src="/font-imge.jpg"
          alt="a photo of a font"
          className=" rounded-lg self-center  object-cover "
          width={600}
          height={300}
        ></Image>
        <CardTitle>
          what is font? the history of the font and how to use it?{" "}
        </CardTitle>
        <CardDescription>
          Hey there! Ever wondered why certain websites or documents catch your
          eye immediately? A lot of it boils down to the fonts used. Fonts might
          seem like a small detail, but they play a huge role in communication.{" "}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Link href="/Bloge/what-font">
          {" "}
          <Button className="w-40">read</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
export function Blogecard3() {
  return (
    <Card className="md:w-[40%] w-[90%]  mt-20">
      <CardHeader>
        <Image
          src="/creative.jpg"
          alt="a photo of a font"
          className=" rounded-lg self-center  object-cover "
          width={800}
          height={300}
        ></Image>
        <CardTitle>Wow, this looks amazing ! what font is this ? </CardTitle>
        <CardDescription>
          Ever stumbled upon a blog post and thought, Wow, this looks amazing!?
          Chances are, the fonts played a huge role in that first impression.
          Fonts arent just about legibility; theyre about setting the tone,
          conveying emotion, and even branding
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Link  href="/Bloge/wow-this-is-amazing">
          <Button className="w-40">read</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
