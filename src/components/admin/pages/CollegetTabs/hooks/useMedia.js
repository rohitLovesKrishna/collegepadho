import {useState} from 'react'
import emptyImage from '../../../../assets/emptyImage.jpg'
const useMedia = () => {
    const [images ,setImages] = useState([{size:"200 X 200",name:"College logo",imageURL:emptyImage,file:""},{size:"1600 X 600",name:"College cover",imageURL:emptyImage,file:""},{size:"960 X 640",name:"College gallery images",imageURL:emptyImage,file:""}])

    const handleChange =(e,index)=>{ 
      const file = e.target.files[0]; const reader =new FileReader();
      reader.onloadend = ()=>{const newList = [...images];newList[index].imageURL = reader.result;newList[index].file = file;setImages(newList)};reader.readAsDataURL(file)}
    
    return (
   [images,handleChange,setImages]
  )
}

export default useMedia