import { useState } from "react";
const def  = [{Dashboard:false,Stream:false,Colleges:false, Amenities:false,Advertisement:false, Page:false,Blog:false, Location:false,Pricings:false, Offline:false,Leads:false,Payment:false,Rating:false,Users:false,Settings:false,}]
export  const useModal = ()=>{
const [open, setOpen] = useState(def);


const handleClick = (index) => {setOpen(def);
if(open[index]){setOpen(def)}else{setOpen(prev=>{return {...prev,[index]:!prev[index]}})}};

  return {open,handleClick}

}