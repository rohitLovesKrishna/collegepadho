import useDesc from './hooks/useDesc'
import { Grid,TextField, Typography,IconButton} from '@mui/material'
import {Add,Remove} from '@mui/icons-material'
import SendDataBtn from '../../Global/SendDataBtn'
import axios from 'axios'
import BASE_URL from '../../../constant'
import { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'


// THIS EDIT PAGE IS DIFFERENT THEN OTHER PAGES

const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={12} md={12} sm={12} xs={12}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}>{props.type === 'multiple'?<TextField inputProps={{style:{cursor:props.disabled ?'not-allowed':"auto"}}} disabled={props.disabled} sx={{mb:"20px"}} value={props.value2} onChange={(e)=>{props.onChange2(e,props.in,'title')}}  InputLabelProps={{ style: { fontSize: "10px"} }} fullWidth focused={false} autoFocus size="small"  label="Title" variant="outlined"/>:""} <TextField inputProps={{style:{cursor:props.disabled ?'not-allowed':"auto"}}} disabled={props.disabled} value={props.value} onChange={(e)=>{props.onChange(e,props.in,'desc')}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false}  size="small"  label={props.placeholder} variant="outlined"/></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'?<> <Grid item><IconButton size='small' onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid><Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid></>:""}</Grid></>)}
const ClgTabDescription = ({selectionHandler}) => {
const param = useParams()



// DES STATE MANAGE
const [descriptionState,setDescriptionState] = useState([{title:"",description:"",cid:param.id}])
const additionHandler =()=>{const newList =[...descriptionState,{title:"",description:"",cid:param.id}];setDescriptionState(newList)}
const removeHandler=(index)=>{const newList = [...descriptionState];newList.splice(index,1);setDescriptionState(newList)}
const onChangeHandler =(event,index,val)=>{const newList = [...descriptionState];if(val === 'title'){newList[index].title = event.target.value}if(val === 'desc'){newList[index].description = event.target.value};setDescriptionState(newList)}
 // DES STATE MANAGE




const [desData,setDesData] = useState([])
const isDone = localStorage.getItem("STEP_2")
const [isDisabled,setIsDisabled] = useState(false)
   

const fetchDes = ()=>{
  axios.get(`${BASE_URL}/api/collegeinfo/${param.id}`).then((res)=>{setDesData(res.data.response.collegeDescription);}).then((err)=>{console.log(err);})
}
useEffect(()=>{fetchDes()},[])
const dataToServerHandler = (e)=>{
  e.preventDefault();
  //  axios.post(`${BASE_URL}/api/collegedescription`,descriptionState).then((res)=>{alert('Description and Title added successfully!');localStorage.setItem("STEP_2",2);setIsDisabled(true)}).catch((err)=>{console.log(err);})
}
useEffect(()=>{if(isDone ){setIsDisabled(true)}},[isDone]);
useEffect(()=>{if(desData.length > 0){setDescriptionState(desData.map((item)=>{return {title:item.title,description:item.description,cid:item.cid}}))}},[desData])
if(desData.length > 0){
  return (
    <>
    <form onSubmit={dataToServerHandler}>
            {descriptionState.map((item,index)=>{
      return (<TextComponent disabled={isDisabled}  key={item+index} onChange2={onChangeHandler} onChange={onChangeHandler} value={descriptionState[index].description} value2={descriptionState[index].title} onClick2={()=>removeHandler(index)}  onClick={additionHandler}  type ="multiple" in={index}    label="Description"  placeholder = "Enter details here.."/>
    )})}
     <Grid item container>
  <SendDataBtn type="Send" disabled={isDisabled} >Send Data</SendDataBtn>
  <SendDataBtn onClick={()=>selectionHandler("Amenities")} type="Next" disabled={isDisabled} >Next Step</SendDataBtn>
   </Grid>
    </form>
    </>
  )
}

}

export default ClgTabDescription