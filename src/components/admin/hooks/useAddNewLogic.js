import { useState } from "react"


const isSelectDef = {Basic:false,Description:false,Amenities:false,Media:false,SEO:false,Schedule:false,Contact:false,Course:false, Placement:false}
const isSelect = {Basic:true,Description:false,Amenities:false,Media:false,SEO:false,Schedule:false,Contact:false,Course:false,Placement:false}

const useAddNewLogic = () => {
  
  const data = ["Basic","Description","Amenities","Media","SEO","Schedule","Contact","Course","Placement"]
  const [selected,setSelected] = useState(isSelect)

   
    const selectionHandler=(item)=>{setSelected(isSelectDef)
        setSelected((prev)=>{return {...prev,[item]:true}})
    }

  return {selected,selectionHandler,data}
}

export default useAddNewLogic