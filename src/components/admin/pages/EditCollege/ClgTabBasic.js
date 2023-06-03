import {Button, FormControl, Grid,MenuItem, Select, TextField, Typography,IconButton} from '@mui/material'
import {Add,Remove} from '@mui/icons-material'
import emptyImage from '../../../assets/emptyImage.jpg'
import { useState ,useEffect} from 'react'
import SendDataBtn from '../../Global/SendDataBtn'
import axios from "axios";
import BASE_URL from "../../../constant";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import useMedia from './hooks/useMedia'
import { useParams } from 'react-router-dom'
const TextComponent2 = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={12} md={12} sm={12} xs={12}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}> <TextField inputProps={{style:{cursor:props.disabled ?'not-allowed':"auto"}}} disabled={props.disabled} required value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px"} }} fullWidth focused={false} size="small"  label={props.placeholder} variant="outlined"/></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'?<> <Grid item><IconButton size='small' onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid><Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid></>:""}</Grid></>)}
const TextComponent = (props)=>{  return (<><Grid  mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={12} md={12} sm={12} xs={12}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid  item lg={12} md={12} sm={12} xs={12}> <TextField inputProps={{style:{cursor:props.disabled ?'not-allowed':"auto"}}} disabled={props.disabled}  required autoFocus={props.autoFocus} value={props.value} onChange={props.onChange}  InputLabelProps={{ style: { fontSize: "10px"} }} fullWidth focused={false} size="small"  label={props.placeholder} variant="outlined"/></Grid></Grid></>)}
const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}>  <FormControl sx={{ width: "100%" }}> <Select  disabled={props.disabled}  required  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e,props.in)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'? <Grid item><IconButton size='small' onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton><IconButton size='small' onClick={props.onClick}  sx={{ml:"10px",bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}</Grid></>)}
const TextareaAutosizeComponent=(props)=>{return ( <Grid  mb={2}  item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}><Grid item><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}><TextareaAutosize  disabled={props.disabled}  required value={props.value} onChange={props.onChange} style={{ width: "100%", outline: "none" }} placeholder={props.placeholder} minRows={props.rows}/></Grid></Grid>)}

// THIS EDIT PAGE IS DIFFERENT THEN OTHER PAGES


const ClgTabBasic = ({selectionHandler}) => {

//award state manage
const [awardState,setAwardState] = useState([{award:""}])
const additionHandler2=()=>{const newList = [...awardState,{award:""}];setAwardState(newList)}
const removeHandler2=(index)=>{const newList = [...awardState];newList.splice(index,1);setAwardState(newList)}
const selectHandleChange2 = (event,index)=>{const newList = [...awardState];newList[index].award = event.target.value;setAwardState(newList)}
//award state manage
// stream state manage
 const [streamState,setStreamState] = useState([{stream:""}])
const additionHandler=()=>{const newList = [...streamState,{stream:""}];setStreamState(newList)}
 const removeHandler=(index)=>{const newList = [...streamState];newList.splice(index,1);setStreamState(newList)}
 const selectHandleChange = (event,index)=>{const newList = [...streamState];newList[index].stream = event.target.value;setStreamState(newList)}
// stream state manage




const param = useParams()
const collegeId = localStorage.getItem('COLLEGE_ID');
const [isDisabled,setIsDisabled] = useState(false)
const [collegeData,setCollegeData] = useState([])

const [images,handleChange,setImages] = useMedia()
const [countryData,setCountryData] = useState([])
const [locationData,setLocationData] = useState([])
const fetchIndividualCollge = ()=>{axios.get(`${BASE_URL}/api/college`).then((res)=>{const newData = res.data.responses;setCollegeData(newData.filter((item)=>{return item._id === param.id}))}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchIndividualCollge(),[])
const fetchCity = ()=>{axios.get(`${BASE_URL}/api/location`).then((res)=>{setLocationData(res.data.response)}).catch((err)=>{console.log(err);})}
useEffect(()=>fetchCity(),[])
const fetchCountries = ()=>{axios.get(`${BASE_URL}/api/country`).then((res)=>{setCountryData(res.data.response)})}
const [textField2,setTextField2] = useState({country:"",state:"",address:"",location:""});
// const {additionHandler,removeHandler,selectHandleChange,streamState} = useAddLogic()
const [textField,setTextField] = useState({googleid:"",featuredType:"",collegeType:"",name:"",shortDescription:"",approved:"",established:"",course:""});
const dataToServerHandler = (e)=>{
  e.preventDefault()
//   const formdata = new FormData();
//   formdata.append('collegeName',textField.name)
//   formdata.append('college_type',textField.collegeType)
//   formdata.append('googleAnalyticsId',textField.googleid)
//   formdata.append('approvedBy',textField.approved)
//   formdata.append('shortDescription',textField.shortDescription)
//   formdata.append('established_in',textField.established)
//   formdata.append('awards',JSON.stringify(awardState.map((item)=>{return item.award})))
//   formdata.append('total_course_offered',textField.course)
//   formdata.append('isPopular',textField.featuredType === 'Featured'?true:false)
//   formdata.append('stream',JSON.stringify(streamState.map((item)=>{return item.stream})))
//   formdata.append('myFile',images[1].file)
//   formdata.append('country',textField2.country)
//   formdata.append('state',textField2.state)
//   formdata.append('fullAddress',textField2.address)
//   formdata.append('location',textField2.location)
//   console.log(formdata.get('location'));
// axios.post(`${BASE_URL}/api/college`,formdata).then((res)=>{alert('College basic info added successfully');if(res.data.message === 'College Created'){localStorage.setItem('COLLEGE_ID',JSON.stringify(res.data.response));setIsDisabled(true);}}).catch((err)=>{console.log(err);})
}
useEffect(()=>fetchCountries(),[])
useEffect(()=>{if(collegeId){setIsDisabled(true);}},[collegeId])
useEffect(()=>{
if(collegeData.length > 0){
  const [data] = collegeData;
  setTextField({googleid:data.googleAnalyticsId,featuredType:data.isPopular?"Featured" : "Non-Featured",collegeType:data.college_type,name:data.collegeName,shortDescription:data.shortDescription,approved:data.approvedBy,established:data.established_in,course:data.total_course_offered})
  setTextField2({country:data.country,state:collegeData.length > 0?data.state : [],address:data.fullAddress,location:data.location})
  setImages([{size:"200 X 200",name:"College logo",imageURL:emptyImage,file:""},{size:"1600 X 600",name:"College cover",imageURL:`${BASE_URL}`+data.image,file:`${BASE_URL}`+data.image},{size:"960 X 640",name:"College gallery images",imageURL:emptyImage,file:""}])
 setAwardState(data.awards.map((item)=>{return {award:item}}))
 setStreamState(data.stream.map((item)=>{return {stream:item}}))
}
},[collegeData])

if(collegeData.length > 0){
  return (
    <>
       <form onSubmit={dataToServerHandler}>
      <Grid item container>
     <TextComponent disabled={isDisabled} autoFocus={true}   onChange={(e)=>{const newList ={...textField};newList.name = e.target.value;setTextField(newList)}} value={textField.name}  label="College name" placeholder = "College Name"/>
     <TextComponent disabled={isDisabled}   onChange={(e)=>{const newList ={...textField};newList.shortDescription = e.target.value;setTextField(newList)}} value={textField.shortDescription}  label="Short description" placeholder = "Enter summary here.."/>
      <SelectComponent disabled={isDisabled}  onChange={(e)=>setTextField2((prev)=>{return {...prev,country:e.target.value}})} value={textField2.country} label="Country" placeholder="Select Country" listItems={countryData.map((item)=>{return item.country})}/>
      <SelectComponent disabled={isDisabled} onChange={(e)=>setTextField2((prev)=>{return {...prev,state:e.target.value}})} value={textField2.state} label="State" placeholder="Select State" listItems={textField2.country?countryData.filter((item)=>{return item.country === textField2.country})[0].states:[]}/>
      <SelectComponent disabled={isDisabled} onChange={(e)=>setTextField2((prev)=>{return {...prev,location:e.target.value}})} value={textField2.location} label="Location" placeholder="Select city" listItems={locationData.map((item)=>{return item.locationName})}/>
      <TextareaAutosizeComponent disabled={isDisabled} onChange={(e)=>setTextField2((prev)=>{return {...prev,address:e.target.value}})} value={textField2.address} label="Address" rows={6} placeholder="Enter address here..."/>
     <TextComponent disabled={isDisabled}  onChange={(e)=>{const newList ={...textField};newList.approved = e.target.value;setTextField(newList)}} value={textField.approved}  label="Approved by" placeholder = ""/>
     <TextComponent disabled={isDisabled}  onChange={(e,i)=>{const newList ={...textField};newList.established = e.target.value;setTextField(newList)}} value={textField.established}  label="Established in" placeholder = ""/>
     <TextComponent disabled={isDisabled} onChange={(e,i)=>{const newList ={...textField};newList.course = e.target.value;setTextField(newList)}} value={textField.course}  label="Course offerd" placeholder = "Total No. of Courses Offered"/>
     <SelectComponent disabled={isDisabled} onChange={(e,i)=>{const newList ={...textField};newList.collegeType = e.target.value;setTextField(newList)}} value={textField.collegeType} label="College type" placeholder="Select College Type" listItems={["Private","Government"]}/>
     <SelectComponent disabled={isDisabled} onChange={(e,i)=>{const newList ={...textField};newList.featuredType = e.target.value;setTextField(newList)}} value={textField.featuredType} label="Featured type" placeholder="Select Featured Type" listItems={["Featured","Non-Featured"]}/>
     <TextComponent disabled={isDisabled}  onChange={(e,i)=>{const newList ={...textField};newList.googleid = e.target.value;setTextField(newList)}} value={textField.googleid}  label="Google analytics id" placeholder = "Google analytics id.." />
      {awardState.map((item,index)=>{
      return  ( <TextComponent2 disabled={isDisabled}  key={item+index} onClick2={()=>removeHandler2(index)} onClick={additionHandler2}  onChange={selectHandleChange2} type ="multiple" in={index}  value={awardState[index].award}  label="Award"  placeholder = "Enter details here.."/>)
     })}
    {streamState.map((item,index)=>{
      return  <SelectComponent disabled={isDisabled} key={item+index} onClick2={removeHandler} onClick={additionHandler} type ="multiple" in={index} onChange={selectHandleChange} value={streamState[index].stream} label="Stream" placeholder="Select Stream" listItems={["Management","Engineering","Pharmacy","Dental","Education","Journalism","Law","Medical","Architecture","Arts and Humanities","Information Technology","Commerce and Banking","Hotel Management","Design Colleges"]}/>
    })}
    <Grid mb={2} item container sx={{justifyContent: "space-evenly", alignItems: "center",flexDirection:"row" }} spacing={2}> 
    <Grid item  lg={6} md={6} sm={6}  xs={12}><Typography  mr="14px" fontSize="12px" color="#646c9a">College Thumbnail<br/>460 X 306</Typography>
    </Grid> 
    <Grid item lg={6} md={6} sm={6} xs={12} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <img required width="70%" height="40%" htmlFor={`searchInputadmin`} src={images[1].imageURL} alt="empty">
        </img> <br/>
        <Button  disabled={isDisabled} sx={{textTransform:"unset",fontSize:{xs:'10px'}}}  component="label" htmlFor={`searchInputadmin`}>
            Select image
       <TextField disabled={isDisabled} onChange={(e)=>handleChange(e,1)} style={{display:"none"}} accept="image/jpg"  type='file' hidden  fullWidth size="small" id={`searchInputadmin`}   variant="outlined"/>
            </Button>     
         </Grid>
         </Grid>
    </Grid>
    <Grid item container>
   <SendDataBtn type="Send" disabled={isDisabled} >Send Data</SendDataBtn>
       <SendDataBtn onClick={()=>selectionHandler("Description")} type="Next" disabled={isDisabled} >Next Step</SendDataBtn>
    </Grid>
     
        </form>
    </>
  )
}
}

export default ClgTabBasic