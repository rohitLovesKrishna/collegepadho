import {IconButton,Grid, Typography,TextField, Button,FormControl,Select,MenuItem } from '@mui/material'
import {Add,Remove} from '@mui/icons-material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import SendDataBtn from '../../Global/SendDataBtn';
import emptyImage from '../../../assets/emptyImage.jpg'
import axios from 'axios';
import BASE_URL from '../../../constant';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item sx={{width:"100%"}}><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}>  <FormControl sx={{ width: "100%" }}> <Select disabled    displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'? <Grid item><IconButton onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid>:""}</Grid></>)}
const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item sx={{width:"100%"}}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}> <TextField value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small"  label={props.placeholder} variant="outlined"/></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'? <Grid item><IconButton onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid>:""}</Grid></>)}

const ClgTabMedia = ({selectionHandler}) => {

// image states media
    const [images ,setImages] = useState([{size:"200 X 200",name:"College logo",imageURL:emptyImage,file:""},{size:"1600 X 600",name:"College cover",imageURL:emptyImage,file:""},{size:"960 X 640",name:"College gallery images",imageURL:emptyImage,file:""}])
    const handleChange =(e,index)=>{ 
      const file = e.target.files[0]; const reader = new FileReader();
      reader.onloadend = ()=>{const newList = [...images];newList[index].imageURL = reader.result;newList[index].file = file;setImages(newList)};reader.readAsDataURL(file)}
    // 



  const param = useParams();
  const [isData,setIsData] = useState(false)
  const [textField,setTextField] = useState([{videoProvider:"Youtube"},{videourl:""}]);
  const [isDisabled,setIsDisabled] = useState(false)
  const [collegeMedia,setCollegeMedia]  = useState("")
  const [collegeGallery,setCollegeGallery]  = useState([])
  const [im,setIm] = useState(false)
  const fetchMedia = ()=>{axios.get(`${BASE_URL}/api/collegeinfo/${param.id}`).then((res)=>{setIsData(true);setCollegeGallery(res.data.response.collegeGallery);setCollegeMedia(res.data.response);setTextField([{videoProvider:"Youtube"},{videourl:res.data.response.collegeVideoURL.youTubeUrl}])}).catch((err)=>{console.log(err);})}
useEffect(()=>{if(collegeMedia){setImages([{size:"200 X 200",name:"College logo",imageURL:`${BASE_URL}`+collegeMedia.collegeLogo.image,file:`${BASE_URL}`+collegeMedia.collegeLogo.image},{size:"1600 X 600",name:"College cover",imageURL:`${BASE_URL}`+collegeMedia.collegeCover.image,file:`${BASE_URL}`+collegeMedia.collegeCover.image},{size:"960 X 640",name:"College gallery images",imageURL:emptyImage,file:""}])}},[collegeMedia])
useEffect(()=>fetchMedia(),[param.id])
  const dataToServerHandler =()=>{
  // const collegeID = localStorage.getItem('COLLEGE_ID');
    // axios.post(`${BASE_URL}/api/collegevurl`,{youTubeUrl:textField[1].videourl,cid:JSON.parse(collegeID)}).then((res)=>{alert('Video URL  added successfully')}).catch((err)=>{console.log(err);})
  }
// console.log(collegeMedia);
  const sendToServer = (index)=>{
  const collegeID = localStorage.getItem('COLLEGE_ID');
  if(index === 0){
      if(images[0].file){ 
  const formdata = new FormData();
  formdata.append('myFile',images[0].file)
  formdata.append('cid',param.id)
  axios.post(`${BASE_URL}/api/collegelogo`,formdata).then((res)=>{alert('Logo image  added successfully')}).catch((err)=>{console.log(err);})
        }
    if(!images[0].file){
alert("Please upload image")
  }
}
if(index === 1){
    if(images[1].file){ 
  const formdata = new FormData();
  formdata.append('myFile',images[1].file)
 formdata.append('cid',param.id)
  axios.post(`${BASE_URL}/api/collegecover`,formdata).then((res)=>{alert('Cover image added successfully')}).catch((err)=>{console.log(err);})
    }
    if(!images[1].file){
alert("Please upload image")
  }
}
if(index === 2){
  if(images[2].file){
  const formdata = new FormData();
  formdata.append('myFile',images[2].file);
  formdata.append('cid',param.id)
   axios.post(`${BASE_URL}/api/collegegallery`,formdata).then((res)=>{alert('Gallery image added successfully');const newList = [...images];newList[2].file="";newList[2].imageURL = emptyImage;setImages(newList) }).catch((err)=>{console.log(err);})
      setIm(true);
  //state reset
  }
  if(images[2].file === ""){
alert("Please upload image")
  }

}}
const deleteImageHandler = (e,id)=>{
console.log(id)
}

if(isData){
return (
    <>
        <SelectComponent in={0}   value='Youtube' label="Video provider" placeholder="Youtube" listItems={["Youtube"]}/>
        <TextComponent  in={1}  onChange={(e,i)=>{const newList =[...textField];newList[i].videourl = e.target.value;setTextField(newList)}} value={textField[1].videourl}  label="Video url" placeholder = "Video url" />
            <Grid container>
             <SendDataBtn type="Send" onClick={dataToServerHandler}>Save URL</SendDataBtn>
            </Grid>
        
      {images.map((item,index)=>{
        if(!item.imageURL ){return ""}else{
                    return (
                <Grid  key={index} mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> 
    <Grid item><Typography p={"20px"} mr="14px" fontWeight={800} fontSize="12px" color="#646c9a">{item.name}<br/>{item.size}</Typography>
    </Grid> 
    <Grid item lg={12} md={12} sm={12} xs={12} >
<Grid item>
          {index === 2 ? "" :  <Button onClick={()=>sendToServer(index)} sx={{textTransform:"unset",position:'absolute',left:"60%"}} variant='contained' size='small' >Upload Now</Button> }
           {index === 2 && <Button onClick={()=>sendToServer(2)} sx={{textTransform:"unset",position:'absolute',left:"55%"}} variant='contained' size='small' >{!im ?'Upload gallery image':'+ Add more (Please Do not upload the same image !)'}</Button>}
        <img  width="40%" height="40%" htmlFor={`searchInputadmin${index}`} src={images[index].imageURL} alt="empty">
        </img>
</Grid>
           <br/>
        <Button variant='outlined' sx={{textTransform:"unset"}}  component="label" htmlFor={`searchInputadmin${index}`}>
            Select image
       <TextField onChange={(e)=>handleChange(e,index)} style={{display:"none"}} accept="image/jpg"  type='file' hidden  fullWidth size="small" id={`searchInputadmin${index}`}   variant="outlined"/>
            </Button>     
         </Grid>
         </Grid>
    )}})}
<Grid container spacing={2} justifyContent={"center"}>
  <Grid item xs={12}><Typography textAlign={'center'}><u>Uploaded Gallery Images</u><span style={{color:"red"}}> (click on delete icon to delete)
    </span></Typography></Grid>
  {collegeGallery.map((item)=>{
    return (<Grid key={item._id} item sx={{position:"relative"}}> 
      <img width={"120px"} height={"100px"} src={`${BASE_URL}`+item.image} alt="pic" />
      <IconButton sx={{color:"red",position:'absolute',right:"60px"}}>
      <DeleteOutlineIcon onClick={(e)=>deleteImageHandler(e,item._id)} sx={{color:"red",position:'absolute',top:"40px",fontSize:"30px"}}/>
      </IconButton>
    </Grid>)
  })}
</Grid>
    <SendDataBtn disabled={!isDisabled} onClick={()=>selectionHandler("SEO")} type="Next" >Next Step</SendDataBtn>
    </>
  )
}else{
  return <Typography>Loading...</Typography>
}
  
}

export default ClgTabMedia