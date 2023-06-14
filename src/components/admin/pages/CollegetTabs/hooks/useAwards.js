import { useState } from "react";

const useAwards = () => {
const [awardState,setAwardState] = useState([{award:""}])

 const additionHandler2=()=>{const newList = [...awardState,{award:""}];setAwardState(newList)}
  const removeHandler2=(index)=>{const newList = [...awardState];newList.splice(index,1);setAwardState(newList)}
 const selectHandleChange2 = (event,index)=>{const newList = [...awardState];newList[index].award = event.target.value;setAwardState(newList)}

 return { additionHandler2, removeHandler2,selectHandleChange2 ,awardState};
};

export default useAwards;
