import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NoteFound(){
    return(
        <div className="flex justify-center  h-full mt-[50%] md:mt-0">
      <NoteFound404/>
    
      </div>
    )
}
function NoteFound404() {
return(<Image src="/404-Notefound.gif" width={1280} height={720} className="md:w-full md:h-[80vh] w-[97vw] object-cover"alt="404 page note found"></Image>)
}