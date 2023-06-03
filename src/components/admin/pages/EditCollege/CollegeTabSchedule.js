import {FormControl,Grid,MenuItem,Select,Typography,} from "@mui/material";
import { useEffect, useState } from "react";
import SendDataBtn from "../../Global/SendDataBtn";

const data = [
  "Saturday opening",
  "Saturday closing",
  "Sunday opening",
  "Sunday closing",
  "Monday opening",
  "Monday closing",
  "Tuesday opening",
  "Tuesday closing",
  "Wednesday opening",
  "Wednesday closing",
  "Thursday opening",
  "Thursday closing",
  "Friday opening",
  "Friday closing",
];
const timeData = [
  "12 am",
  "01 am",
  "02 am",
  "03 am",
  "04 am",
  "05 am",
  "06 am",
  "07 am",
  "08 am",
  "09 am",
  "10 am",
  "11 am",
  "12 pm",
  "01 pm",
  "02 pm",
  "03 pm",
  "04 pm",
  "05 pm",
  "06 pm",
  "07 pm",
  "08 pm",
  "09 pm",
  "10 pm",
  "11 pm",
];

const SelectComponent = ({dropdownValue,handleDropdownChange})=>{    return(  <>   <Grid item container lg={12} md={12} sm={12} xs={12} spacing={2}>  {data.map((day,index) => {  return ( <Grid key={day} item lg={6} md={6} sm={6} xs={12}>  <Typography color="#646c9a;" fontSize="12px">  {day} </Typography>  <FormControl sx={{ width: "100%" }}>  <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>Closed</em>;}return dropdownValue[day]}}  onClick={(event) => event.stopPropagation()} size="small" labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}value={dropdownValue[day]}onChange={(e)=>handleDropdownChange(e,day)} ><MenuItem sx={{ fontSize: "10px" }} value="Closed">Closed </MenuItem>{timeData.map((time) => {return (<MenuItem key={time} sx={{ fontSize: "10px" }} value={time}>{time}</MenuItem>);})}</Select></FormControl></Grid>);})}</Grid></>)}

const CollegeTabSchedule = ({selectionHandler}) => {
const [dropdownValue, setDropDownValue] = useState({"Saturday opening":"Closed","Saturday closing":"Closed","Sunday opening":"Closed","Sunday closing":"Closed","Monday opening":"Closed","Monday closing":"Closed","Tuesday opening":"Closed" ,"Tuesday closing":"Closed","Wednesday opening":"Closed","Wednesday closing":"Closed" ,"Thursday opening":"Closed","Thursday closing":"Closed","Friday opening":"Closed","Friday closing":"Closed"});
const [isDisabled,setIsDisabled] = useState(false)
useEffect(()=>setIsDisabled(true),[])

  return (
    <>
    <SelectComponent handleDropdownChange={(e,day)=>setDropDownValue((prev)=>{return {...prev,[day]:e.target.value}})} dropdownValue={dropdownValue}/>
       <Grid item container>
    <SendDataBtn onClick={()=>selectionHandler("Contact")} type="Next" disabled={isDisabled} >Next Step</SendDataBtn>
   </Grid>
    </>
  );
};

export default CollegeTabSchedule;
