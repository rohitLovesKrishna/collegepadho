import { useState } from "react";

const useAddForm = () => {
 const [formState,setFormState] = useState([])
// console.log(formState);
 const removeHandler=(index)=>{const newList = [...formState];newList.splice(index,1);setFormState(newList)}
const additionHandler=()=>{const newList = [...formState,{}];setFormState(newList)}

  return { additionHandler, removeHandler ,formState};
};

export default useAddForm;
