import { Grid, TextareaAutosize, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import SendDataBtn from "../../Global/SendDataBtn";
import axios from "axios";
import BASE_URL from "../../../constant";
import { useParams } from "react-router-dom";

const TextareaAutosizeComponent=(props)=>{return ( <Grid  mb={2}  item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}><Grid item sx={{width:"100%"}}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}><TextareaAutosize disabled={props.disabled} value={props.value} onChange={props.onChange} style={{ width: "100%", outline: "none" }} placeholder={props.placeholder} minRows={props.rows}/></Grid></Grid>)}

const ClgTabSEO = ({selectionHandler}) => {
  const param = useParams()
    // const isDone = localStorage.getItem("STEP_5")
  const [isDisabled,setIsDisabled] = useState(false)
  const [isData,setIsData] = useState("")
  const [isDataReceived,setIsDataReceived] = useState(false)
  const [textField,setTextField] = useState({metatitle:"",metakeywords:"",metadesc:""});
  const fetchSEO = ()=>{
    axios.get(`${BASE_URL}/api/collegeinfo/${param.id}`).then((res)=>{setIsDataReceived(true);setIsData(res.data.response.collegeSEO)})
  }
  useEffect(()=>{fetchSEO()},[])
  useEffect(()=>{if(isDataReceived){setTextField({metatitle:isData.metaTitle,metakeywords:isData.metaKeywords,metadesc:isData.metaDescription})}},[isData])
  const dataToServer = (e)=>{
    e.preventDefault()
  // const collegeID = localStorage.getItem('COLLEGE_ID');
  // axios.post(`${BASE_URL}/api/seo`,{metaTitle:textField.metatitle, metaKeywords:textField.metakeywords,metaDescription:textField.metadesc, cid:JSON.parse(collegeID)}).then((res)=>{alert('SEO data added successfully');localStorage.setItem("STEP_5",5);setIsDisabled(true)}).catch((err)=>{console.log(err);})
  }
  // useEffect(()=>{if(isDone ){setIsDisabled(true)}},[isDone]);

if(isDataReceived){
    return (
    <>
    <form onSubmit={dataToServer}>
  <TextareaAutosizeComponent disabled={isDisabled} onChange={(e)=>setTextField((prev)=>{return {...prev,metatitle:e.target.value}})} value={textField.metatitle} label="Meta Title" rows={6} />
     <TextareaAutosizeComponent  disabled={isDisabled} onChange={(e)=>setTextField((prev)=>{return {...prev,metakeywords:e.target.value}})} value={textField.metakeywords} label="Meta Keywords" rows={6} />
     <TextareaAutosizeComponent  disabled={isDisabled} onChange={(e)=>setTextField((prev)=>{return {...prev,metadesc:e.target.value}})} value={textField.metadesc} label="Meta Description" rows={6} />
       <Grid item container>
  <SendDataBtn type="Send" disabled={isDisabled} >Send Data</SendDataBtn>
  <SendDataBtn onClick={()=>selectionHandler("Schedule")} type="Next" disabled={!isDisabled} >Next Step</SendDataBtn>
   </Grid> </form>
</>
  );
}
else{
  return <Typography>Loading...</Typography>
}

};

export default ClgTabSEO;
