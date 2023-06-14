import useDesc from './hooks/useDesc'
import { Grid,TextField, Typography,IconButton} from '@mui/material'
import {Add,Remove} from '@mui/icons-material'
import SendDataBtn from '../../Global/SendDataBtn'
import axios from 'axios'
import BASE_URL from '../../../constant'
import { useEffect,useState} from 'react'



const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={12} md={12} sm={12} xs={12}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={10} md={10} sm={10} xs={10}>{props.type === 'multiple'?<TextField inputProps={{style:{cursor:props.disabled ?'not-allowed':"auto"}}} disabled={props.disabled} sx={{mb:"20px"}} value={props.value2} onChange={(e)=>{props.onChange2(e,props.in,'title')}}  InputLabelProps={{ style: { fontSize: "10px"} }} fullWidth focused={false} autoFocus size="small"  label="Title" variant="outlined"/>:""} <TextField inputProps={{style:{cursor:props.disabled ?'not-allowed':"auto"}}} disabled={props.disabled} value={props.value} onChange={(e)=>{props.onChange(e,props.in,'desc')}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false}  size="small"  label={props.placeholder} variant="outlined"/></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'?<> <Grid item><IconButton size='small' onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid><Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid></>:""}</Grid></>)}
const ClgTabDescription = ({selectionHandler}) => {
  const isDone = localStorage.getItem("STEP_2")
  const [isDisabled,setIsDisabled] = useState(false)
const {additionHandler,removeHandler,onChangeHandler,descriptionState} = useDesc()
   
const dataToServerHandler = (e)=>{
  e.preventDefault();
   axios.post(`${BASE_URL}/api/collegedescription`,descriptionState).then((res)=>{alert('Description and Title added successfully!');localStorage.setItem("STEP_2",2);setIsDisabled(true)}).catch((err)=>{console.log(err);})
}
useEffect(()=>{if(isDone ){setIsDisabled(true)}},[isDone]);
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

export default ClgTabDescription