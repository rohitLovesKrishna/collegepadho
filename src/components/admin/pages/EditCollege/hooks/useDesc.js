import { useState } from "react";

const useDesc = () => {
    const collegeId = localStorage.getItem('COLLEGE_ID')
const [descriptionState,setDescriptionState] = useState([{title:"",description:"",cid:JSON.parse(collegeId)}])

const additionHandler =()=>{const newList =[...descriptionState,{title:"",description:"",cid:JSON.parse(collegeId)}];setDescriptionState(newList)}
const removeHandler=(index)=>{const newList = [...descriptionState];newList.splice(index,1);setDescriptionState(newList)}
const onChangeHandler =(event,index,val)=>{const newList = [...descriptionState];if(val === 'title'){newList[index].title = event.target.value}if(val === 'desc'){newList[index].description = event.target.value};setDescriptionState(newList)}
 
return { additionHandler,removeHandler ,onChangeHandler,descriptionState};
};

export default useDesc;
