import { Grid, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";
import { IconPickerItem } from 'react-fa-icon-picker'
import {  useEffect, useState } from "react";
import SendDataBtn from "../../Global/SendDataBtn";
import axios from "axios";
import BASE_URL from "../../../constant";
import { useParams } from "react-router-dom";


const ClgTabAmenities = ({selectionHandler}) => {
const param = useParams();
const isDone = localStorage.getItem("STEP_3")
const [isDisabled,setIsDisabled] = useState(false)
const [data,setData] = useState([]);
const [dataIndividual,setDataIndividual] = useState([]);
const [checkState,setCheckState] = useState({})
const fetchAmenities = ()=>{axios.get(`${BASE_URL}/api/amenity`).then((res)=>{setData(res.data.response);}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchAmenities(),[])
const fetchIndividualAmenities = ()=>{axios.get(`${BASE_URL}/api/collegeinfo/${param.id}`).then((res)=>{setDataIndividual(res.data.response.collegeAmenities);}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchIndividualAmenities(),[])
const handleChange=(event,id)=>{
setCheckState({...checkState,[id]:event.target.checked})
}
const dataToServerHandler = (e)=>{
  e.preventDefault()
  // const CollegeId = localStorage.getItem('COLLEGE_ID');
  // const result =Object.keys(Object.fromEntries(Object.entries(checkState).filter(([, val]) => val === true)))
  // axios.post(`${BASE_URL}/api/collegeamenities`,{amenities:JSON.stringify(result), cid:JSON.parse(CollegeId)}).then((res)=>{alert("Amenity added successfully");localStorage.setItem('STEP_3',3);setIsDisabled(true)}).catch((err)=>{console.log(err);})
}
useEffect(()=>{if(isDone){setIsDisabled(true)}},[isDone]);
useEffect(()=>{if(dataIndividual.length > 0){const [data] = dataIndividual;console.log(data.amenities.map((item)=>{return {...item}}))}})
// console.log(dataIndividual);


if(data.length > 0){
  return (<>
  <form onSubmit={dataToServerHandler}>
<Grid item container spacing={2}>
  {data.map((item,i) => {
    return (<Grid key={item._id} item lg={6} md={6} sm={6} xs={12}>
      <FormControlLabel label={ <Button disabled={isDisabled} startIcon={<IconPickerItem icon={'FaAdobe'}/>}>{item.amenity}</Button>} control={<Checkbox disabled={isDisabled} checked={checkState[item._id] || false} onChange={(e) => handleChange(e,item._id)}/>}/></Grid>);
    })}
    <SendDataBtn type="Send" disabled={isDisabled} >Send Data</SendDataBtn>
  <SendDataBtn onClick={()=>selectionHandler("Media")} type="Next" disabled={isDisabled} >Next Step</SendDataBtn>
    </Grid>
      </form>
  </>)
}else{
  return (<Typography>Loading....</Typography>)
}

};

export default ClgTabAmenities;
