import { useState } from "react";

const useAddLogic = () => {
 const [streamState,setStreamState] = useState([{stream:""}])


const additionHandler=()=>{const newList = [...streamState,{stream:""}];setStreamState(newList)}
 const removeHandler=(index)=>{const newList = [...streamState];newList.splice(index,1);setStreamState(newList)}
 const selectHandleChange = (event,index)=>{const newList = [...streamState];newList[index].stream = event.target.value;setStreamState(newList)}
  return { additionHandler, removeHandler, selectHandleChange ,streamState};
};

export default useAddLogic;
