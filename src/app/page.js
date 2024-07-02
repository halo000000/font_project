import Image from "next/image"
import Link from "next/link"
import ModeToggle from "@/components/mode-toggle";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
 

import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


// __________________________________________________

//Load More Btn  btn import
import { CardContainer,Searchinput} from "@/components/LoadMoreBtn"


// this is the main pages function every thing in here will be deispled in the browser you have to add all componets to here 
export default function page() {
    return (
        <div suppressHydrationWarning>
           < Navbar suppressHydrationWarning></Navbar>
           <AspectRatioDemo suppressHydrationWarning>

           </AspectRatioDemo>
           <Searchinput></Searchinput>
           {/* <CardContainer suppressHydrationWarning></CardContainer> */}
          

        </div>
    )
}


// this is the navbar function 
export  function Navbar() {
    return (
        <div className="w-full h-[65px] bg-background px-3 md:px-5
            flex justify-between items-center"
        >
            <div className="w-[180px] flex justify-start items-center gap-x-1">
                
                
                <p className="font-black md:text-3xl">k-Fonts</p>
            </div>

            <div className="flex justify-center items-center gap-x-6 flex-1 w-full font-bold md:text-3xl">
                
                <Link href="/" className="hover:underline hover:text-gray-800 md:mx-10  ">
                    Home
                </Link>
                
                <Link href="/Bloge" className="hover:underline hover:text-gray-800 md:mx-10">
                    Bloge
                </Link>
                
                <Link href="/more" className="hover:underline hover:text-gray-800 md:mx-10">
                    More
                </Link>
            </div>

            <div className="w-[180px] flex justify-end">

                <ModeToggle />
            </div>
        </div>
    )
}









// this imge and 2 buttons div every thing inside here is you sea after the navbar mines the cards
export function AspectRatioDemo() {
  return (
    <div ratio={1 / .5} className=" md:flex-row  flex-col flex justify-between px-5">
      <div>
      <h1 className="md:text-6xl  text-3xl font-bold md:mt-[24vh] mt-[10vh]	">Downlod 1000 kurdish <br />fonts with K-Fonts </h1>
      <div className="mt-[15vh] flex justify-center md:gap-x-16 gap-x-10">
      <Button  className="px-10 py-6" >Get Started</Button>
      <DialogCloseButton ></DialogCloseButton>
      </div>
      </div>
      <Image
        src="/bradar.svg"
        alt="Photo by Drew Beamer"
        height={200}
        width={1000}
        className="rounded-md   "
      />
     
    </div>
  )
}








export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  className="px-14 py-6" variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription className="text-red-500">
            www.k-fonts.com
          </DialogDescription>
        </DialogHeader>
       
        
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}









export function FontCard({ ref, className,folderName, fontName, ...props }) {
 
  return (
    <Card ref={ref} className={cn("w-[380px] mx-auto	 h-[200px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{fontName.slice(0, -4)}</CardTitle>
        <CardDescription>You can downlod this staning font and 1000+ other fonts here .</CardDescription>
      </CardHeader>
    
      <CardFooter>
      <a href={ganarteUrl(folderName,fontName)} download={true} className="flex w-full">  
        <Button className="w-full mt-6">
          <DownlodIcon/> <span className="ml-2" > Downloed the font</span>     
        </Button>
      </a>
      </CardFooter>
    </Card>
  )
}

function DownlodIcon(){
    return(<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)
}


// data.map(folder=>{

//     folder.contents.map(font=>{
//         console.log(font)
//     })

// })










function ganarteUrl(folder,font) {
  return `https://github.com/halo000000/website_F/raw/main/${folder}/${font}`;
}