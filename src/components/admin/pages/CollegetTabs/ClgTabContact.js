import { Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SendDataBtn from "../../Global/SendDataBtn";
import axios from "axios";
import BASE_URL from "../../../constant";


const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item sx={{width:"100%"}}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}> <TextField  disabled={props.disabled}  value={props.value} onChange={props.onChange}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus ={props.autoFocus} size="small"   label={props.placeholder} variant="outlined"/></Grid></Grid></>)}



const ClgTabContact = ({selectionHandler}) => {
  const isData = localStorage.getItem("STEP_6")
  const [textField,setTextField] = useState({website:"",email:"",number:"",facebook:"",linkedin:""});
    const [isDisabled,setIsDisabled] = useState(false)
   const dataToServer = (e)=>{
    e.preventDefault()
    const collegeID = localStorage.getItem('COLLEGE_ID');
    axios.post(`${BASE_URL}/api/collegecontact`,{website:textField.website, email:textField.email,phone:textField.number,facebook:textField.facebook,linkedin:textField.linkedin, cid:JSON.parse(collegeID)}).then((res)=>{alert('College data added successfully');localStorage.setItem("STEP_6",6);setIsDisabled(true)}).catch((err)=>{console.log(err);})
    }
useEffect(()=>{if(isData){setIsDisabled(true)}},[isData])
  return (
    <>
      <form onSubmit={dataToServer}>
        <TextComponent disabled={isDisabled} autoFocus={true} onChange={(e)=>setTextField((prev)=>{return {...prev,website:e.target.value}})} value={textField.website}  label="Website" placeholder = "Website"/>
        <TextComponent disabled={isDisabled} onChange={(e)=>setTextField((prev)=>{return {...prev,email:e.target.value}})} value={textField.email}  label="Email" placeholder = "Email"/>
        <TextComponent disabled={isDisabled} onChange={(e)=>setTextField((prev)=>{return {...prev,number:e.target.value}})} value={textField.number}  label="Phone Number" placeholder = "Phone Number"/>
        <TextComponent disabled={isDisabled} onChange={(e)=>setTextField((prev)=>{return {...prev,facebook:e.target.value}})} value={textField.facebook}  label="Facebook" placeholder = "www.facebook.com/xyz/"/>
        <TextComponent disabled={isDisabled} onChange={(e)=>setTextField((prev)=>{return {...prev,linkedin:e.target.value}})} value={textField.linkedin}  label="Linkedin" placeholder = "www.linkedin.com/xyz"/>
            <Grid item container>
     <SendDataBtn type="Send" disabled={isDisabled} >Send Data</SendDataBtn>
  <SendDataBtn onClick={()=>selectionHandler("Course")} type="Next" disabled={isDisabled} >Next Step</SendDataBtn>
  </Grid> </form>
    </>
  );
};

export default ClgTabContact;
