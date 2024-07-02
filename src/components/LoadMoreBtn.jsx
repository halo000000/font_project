'use client'

import { Button } from "@/components/ui/button"
import{FontCard}from "@/app/page"
import data  from "@/main.json";
import { useRef, useState,useEffect } from "react";
import useOnScreen from "@/components/onscreen"
import { Input } from "@/components/ui/input"




 export function CardContainer({fontdata}) {
  
   const ref = useRef();
   const isVisible = useOnScreen(ref);
   const [i,seti]=useState(9)
  
    return (
      <div  suppressHydrationWarning >
        <div  className=" grid  lg:grid-cols-3 grid-cols-1 md:grid-cols-2	gap-y-16 lg:mt-[16vh] lg:mt-[40vh] mt-[20vh]">
        { fontdata.slice(0, i).map((font,index) => {
          return (<FontCard ref={ref} key={font.id} folderName={font.folderName} fontName={font.fileName}></FontCard>)})}
          </div>
          <div className=" flex justify-center my-7 ">
          <Button onClick={()=>seti(i+9)}  className="px-10" >load more</Button>
          </div>
      </div>
    );
  }




  export function Searchinput() {
    let [value,setvalue]=useState(" ")
    let [selected,setselcted]=useState(data)
    
function search(){
  let filteredData = data.filter(font=>{
    let serchValue=value.toLowerCase();
    let fontValue = font.fileName.toLowerCase();
    return fontValue.includes(serchValue);

  })
  filteredData.map((font,index)=>{
    return (<FontCard key={font.id} folderName={font.folderName} fontName={font.fileName}></FontCard>)
  })

}
let filteredData= value==" " ? data : data.filter(font=>{
  let serchValue=value.toLowerCase().replace(/\s/g, "")
  let fontValue = font.fileName.toLowerCase().replace(/\s/g, "");
  return fontValue.includes(serchValue);

})

    return (

      <div >
      <div className="w-full flex justify-center items-center gap-x-4">
    <Input type="search" placeholder="Search" id="search" className="w-[60%] md:py-6" onChange={e=>{setvalue(e.target.value)}} />
    <Button className="md:py-6 md:px-10">search</Button>
    </div>
    <CardContainer fontdata={filteredData}></CardContainer>
    </div>
  )
  }
  
