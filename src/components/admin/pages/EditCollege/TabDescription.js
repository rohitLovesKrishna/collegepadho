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
  <SendDataBtn onClick={()=>selectionHandler("Amenities")} type="Next" disabled={!isDisabled} >Next Step</SendDataBtn>
   </Grid>
    </form>
    </>
  )
}
if(desData.length <= 0){
  return <Typography>Loading...</Typography>
}

}

export default ClgTabDescription


// edit course form
// import {TextareaAutosize, TextField,Grid, Paper, Typography,Select,MenuItem, Button, Box, IconButton } from '@mui/material'
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import emptyImage from '../../../assets/emptyImage.jpg'
// import { useState,useEffect } from 'react';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import SendDataBtn from '../../Global/SendDataBtn';
// import axios from 'axios';
// import BASE_URL from '../../../constant';
// import { useParams } from 'react-router-dom';


// const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item sx={{width:"100%"}}><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}>  <FormControl sx={{ width: "100%" }}> <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e,props.in)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid></Grid></>)}
// const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item sx={{width:"100%"}}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}> <TextField value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small" id="searchInputadmin"  label={props.placeholder} variant="outlined"/></Grid></Grid></>)}
// const TextareaAutosizeComponent=(props)=>{return ( <Grid  mb={2}  item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}><Grid item sx={{width:"100%"}}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}><TextareaAutosize value={props.value} onChange={(e)=>{props.onChange(e,props.in)}} style={{ width: "100%", outline: "none" }} placeholder={props.placeholder} minRows={props.rows}/></Grid></Grid>)}

// const ClgTabCourse = ({selectionHandler}) => {
// const param = useParams()
// const [isData,setIsData] = useState([]);
// const [data, setData] = useState([])
// const [isDisabled,setIsDisabled] = useState(false)
// const [isDataReceived,setIsDataReceived] = useState(false)
// const [dataForm,setDataForm] = useState([{stream:""},{courseLevel:""},{courseName:""},{courseDesc:""},{courseFee:""},{seats:""},{duration:""},{courseDeliveryMode:""},{entranceExams:""},{tutionFees:""},{specialisation:""}]);
// const [isCourse,setIsCourse] = useState("");
// const [posToTop, setPosToTop] = useState(false)
// const [addMore,setAddMore] = useState(false)
// const [selectedImage, setSelectedImage] = useState(null);
// const [imageUrl, setImageUrl] = useState(emptyImage);
//     const fetchStreams = ()=>{
//         axios.get(`/api/stream`).then((res)=>{setData(res.data.response)})
//     }
//     useEffect(()=>fetchStreams(),[])
// useEffect(() => {if (selectedImage) {setImageUrl(URL.createObjectURL(selectedImage));}}, [selectedImage]);
// const dataToServer=(e,id)=>{
//   e.preventDefault();
// console.log(id)
// // if(isCourse === 'Without Course'){selectionHandler('Placement')};
// // if(isCourse === 'With Course'){
// //   const formdata = new FormData();
// //   formdata.append('stream',dataForm[0].stream);
// //   formdata.append('courseLevel',dataForm[1].courseLevel);
// //   formdata.append('courseName',dataForm[2].courseName);
// //   formdata.append('courseDescription',dataForm[3].courseDesc);
// //   formdata.append('coursefee',dataForm[4].courseFee);
// //   formdata.append('duration',dataForm[6].duration);
// //   formdata.append('numberOfSeats',dataForm[5].seats);
// //   formdata.append('courseMode',dataForm[7].courseDeliveryMode);
// //   formdata.append('entranceExamsAccepted',dataForm[8].entranceExams);
// //   formdata.append('totalTutionFee',dataForm[9].tutionFees);
// //   formdata.append('specialisation',dataForm[10].specialisation);
// //   formdata.append('myFile',selectedImage);
// //   formdata.append('cid',param.id);
// //   axios.post(`/api/course`,formdata).then((res)=>{alert('Course added successfully!');setIsDisabled(true);setAddMore(true)}).catch(err=>{console.log(err);})
// }
// const fetchCourse = ()=>{
//   axios.get(`/api/collegeinfo/${param.id}`).then((res)=>{setIsDataReceived(true);setIsData(res.data.response.collegeCourse)})
//   }
//   useEffect(()=>{fetchCourse()},[])

// useEffect(()=>{if(addMore){setAddMore(true)}},[addMore])
// useEffect(()=>{if(isCourse === "Without Course"){setIsDisabled(false)}},[isCourse])
// const formResetHandler = ()=>{
// setPosToTop(true)
// setDataForm([{stream:""},{courseLevel:""},{courseName:""},{courseDesc:""},{courseFee:""},{seats:""},{duration:""},{courseDeliveryMode:""},{entranceExams:""},{tutionFees:""},{specialisation:""}])
// setImageUrl(emptyImage)
// setSelectedImage(null)
// setIsDisabled(false);
// setAddMore(prev=>!prev)
// setPosToTop(false)
// }
// useEffect(()=>{window.scrollTo(0,0)},[posToTop])

// if(isDataReceived){
//  return (
//     <>
//     <Paper  sx={{m:"10px",p:"5px",width:"100%",mb:"70px"}} elevation={0}>
//     <Grid container justifyContent={'center'} >
//         <Grid item>
//    <FormControl sx={{width:"100%"}}>
//       <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={(e)=>setIsCourse(e.target.value)} defaultValue="" name="radio-buttons-group">
//         <FormControlLabel sx={{color:"#646c9a"}}  value="Without Course" control={<Radio  size='small'/>} label="Add without course" />
//         <FormControlLabel sx={{color:"#646c9a"}} value="With Course" control={<Radio  size='small'/>} label="Add course" />
//       </RadioGroup>
//     </FormControl>
//      </Grid>
//     </Grid>


// {/* single form only */}
// {isCourse === 'With Course'? <form onSubmit={dataToServer}>
//     <Grid item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} >
//          {isCourse === "With Course"?"": <SendDataBtn onClick={()=>selectionHandler("Placement")} type="Next" disabled={!isDisabled} >Next Step</SendDataBtn>} 
//         <Grid   mb={2}  item container sx={{display: isCourse === "With Course"?'flex':'none',justifyContent: "center", alignItems: "center" }} spacing={2}>
//             <Paper sx={{m:"10px",p:"5px",width:"100%",mb:"0px"}} elevation={0}>
//                 <Typography>Add couse</Typography>
//                  <SelectComponent in={0} onChange={(e,i)=>{const newList =[...dataForm];newList[i].stream = e.target.value;setDataForm(newList)}} value={dataForm[0].stream} label="Stream" placeholder="Select Stream"  listItems={data.map((ele)=>{return (ele.stream)})}/>
//                   <SelectComponent in={1} onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseLevel = e.target.value;setDataForm(newList)}} value={dataForm[1].courseLevel} label="Course Level" placeholder="Select Course Level" listItems={["Graduation","Post Graduation"]}/>
//                   <TextComponent  in={2}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseName = e.target.value;;setDataForm(newList)}} value={dataForm[2].courseName}  label="Course name" placeholder = "Enter course name.." />
//                 <TextareaAutosizeComponent  in={3}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseDesc = e.target.value;;setDataForm(newList)}} value={dataForm[3].courseDesc} label="Course description" rows={6} />
//                 <TextComponent  in={4}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseFee = e.target.value;;setDataForm(newList)}} value={dataForm[4].courseFee}  label="Course fee" placeholder = "Please enter only number" />
//                 <TextComponent  in={5}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].seats = e.target.value;;setDataForm(newList)}} value={dataForm[5].seats}  label="Number of seats" placeholder = "Please enter only number" />
//                 <TextComponent  in={6}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].duration = e.target.value;;setDataForm(newList)}} value={dataForm[6].duration}  label="Duration" placeholder = "Please enter only number" />
//                  <SelectComponent in={7} onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseDeliveryMode = e.target.value;setDataForm(newList)}} value={dataForm[7].courseDeliveryMode} label="Course delivery mode" placeholder="Select Course Delivery Mode" listItems={["Regular","Evening","Online"]}/>
//                 <TextareaAutosizeComponent  in={8}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].entranceExams = e.target.value;;setDataForm(newList)}} value={dataForm[8].entranceExams} label="Entrance exams accepted" rows={6} />
//                  <TextComponent  in={9}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].tutionFees = e.target.value;setDataForm(newList)}} value={dataForm[9].tutionFees}  label="Total tution fees (Rs.)" placeholder = "Please enter only number" />
//                   <TextareaAutosizeComponent  in={10}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].specialisation = e.target.value;setDataForm(newList)}} value={dataForm[10].specialisation} label="Specialisation" rows={6} />
//                   <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
//                      <Paper  sx={{border:"1px solid #ebedf2",width:"70%",height:"fit-content",display:"flex",alignItems:"center",p:"10px",flexDirection:"column"}} elevation={3}>
//                          <img width="100%" height="90%" htmlFor="searchInputadmin" src={imageUrl} alt="empty"></img>
//                          <Button component={"label"} disableRipple><input onChange={e => setSelectedImage(e.target.files[0])} type='file' hidden={true} color="#646c9a"/> <CameraAltIcon/>Upload course image(800x533)</Button>
//                      </Paper>
//             </Grid>

//           <Grid item xs={12}>
//             <Box sx={{display:"flex",justifyContent:"center",mt:"15px"}}>   
//              <Button disabled={!addMore} onClick={formResetHandler} variant="contained" sx={{display:  isCourse?'flex':'none',bgcolor:"#5d78ff",borderRadius:"20px"}}>Add new Course</Button>
//            </Box>
//             </Grid>
//             </Paper>
//    </Grid>
//  </Grid>
//       <Grid item container>
// {isCourse === "With Course" ?
// <>
// <SendDataBtn type="Send" disabled={false} >Send Data</SendDataBtn>
//   <SendDataBtn onClick={()=>selectionHandler("Placement")} type="Next" disabled={true} >Next Step</SendDataBtn>
// </>: ""}
//  </Grid> </form>:""}

// {/* single form ended */}



//     {isCourse === "With Course" ? isData.map((item,index)=>{
//       return (
// <form key={item._id} onSubmit={(e,id)=>dataToServer(e,item._id)}>
//     <Grid item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} >
//   <Typography m="20px" sx={{color:"green",fontSize:"30px",fontWeight:"800"}}><u>Filled Course</u></Typography>
//         <Grid   mb={2}  item container sx={{display: isCourse === "With Course"?'flex':'none',justifyContent: "center", alignItems: "center" }} spacing={2}>
//             <Paper sx={{m:"10px",p:"5px",width:"100%",mb:"0px"}} elevation={0}>
//                 <Typography>Add couse</Typography>
//                  <SelectComponent in={index} onChange={(e,index)=>{const newList =[...isData];newList[index].stream = e.target.value;setIsData(newList)}} value={item.stream} label="Stream" placeholder="Select Stream" listItems={["Management","Engineering","Pharmacy","Dental","Education","Journalism","Law","Medical","Architecture","Arts and Humanities","Information Technology","Commerce and Banking","Hotel Management","Design Colleges"]}/>
//                   <SelectComponent in={index} onChange={(e,index)=>{const newList =[...isData];newList[index].courseLevel = e.target.value;setIsData(newList)}} value={item.courseLevel} label="Course Level" placeholder="Select Course Level" listItems={["Graduation","Post Graduation"]}/>
//                   <TextComponent in={index}  onChange={(e,index)=>{const newList =[...isData];newList[index].courseName = e.target.value;;setIsData(newList)}} value={item.courseName}  label="Course name" placeholder = "Enter course name.." />
//                 <TextareaAutosizeComponent in={index}  onChange={(e,index)=>{const newList =[...isData];newList[index].courseDescription = e.target.value;;setIsData(newList)}} value={item.courseDescription} label="Course description" rows={6} />
//                 <TextComponent  in={index}  onChange={(e,index)=>{const newList =[...isData];newList[index].coursefee = e.target.value;;setIsData(newList)}} value={item.coursefee}  label="Course fee" placeholder = "Please enter only number" />
//                 <TextComponent  in={index} onChange={(e,index)=>{const newList =[...isData];newList[index].numberOfSeats = e.target.value;;setIsData(newList)}} value={item.numberOfSeats}  label="Number of seats" placeholder = "Please enter only number" />
//                 <TextComponent  in={index}  onChange={(e,index)=>{const newList =[...isData];newList[index].duration = e.target.value;;setIsData(newList)}} value={item.duration}  label="Duration" placeholder = "Please enter only number" />
//                  <SelectComponent in={index} onChange={(e,index)=>{const newList =[...isData];newList[index].courseMode = e.target.value;setIsData(newList)}} value={item.courseMode} label="Course delivery mode" placeholder="Select Course Delivery Mode" listItems={["Regular","Evening","Online"]}/>
//                 <TextareaAutosizeComponent in={index}  onChange={(e,index)=>{const newList =[...isData];newList[index].entranceExamsAccepted = e.target.value;;setIsData(newList)}} value={item.entranceExamsAccepted} label="Entrance exams accepted" rows={6} />
//                  <TextComponent in={index} onChange={(e,index)=>{const newList =[...isData];newList[index].totalTutionFee = e.target.value;setIsData(newList)}} value={item.totalTutionFee}  label="Total tution fees (Rs.)" placeholder = "Please enter only number" />
//                   <TextareaAutosizeComponent in={index} onChange={(e,index)=>{const newList =[...isData];newList[index].specialisation = e.target.value;setIsData(newList)}} value={item.specialisation} label="Specialisation" rows={6} />
//                   <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
//                      <Paper  sx={{border:"1px solid #ebedf2",width:"70%",height:"fit-content",display:"flex",alignItems:"center",p:"10px",flexDirection:"column"}} elevation={3}>
//                          <img width="100%" height="90%" htmlFor="searchInputadmin" src={imageUrl} alt="empty"></img>
//                          <Button component={"label"} disableRipple><input onChange={e => setSelectedImage(e.target.files[0])} type='file' hidden={true} color="#646c9a"/> <CameraAltIcon/>Upload course image(800x533)</Button>
//                      </Paper>
//             </Grid>

//             <Grid item xs={12}>
//                                 <Grid key={item._id} item sx={{position:"relative"}}> 
//       <img width={"120px"} height={"100px"} src={`${BASE_URL}`+item.image} alt="pic" />
//       <IconButton sx={{color:"red",position:'absolute',right:"60px"}}>
//         {/* onClick={(e)=>deleteImageHandler(e,item._id)} */}
//       <DeleteOutlineIcon  sx={{color:"red",position:'absolute',top:"40px",fontSize:"30px"}}/>
//       </IconButton>
//     </Grid>
//             </Grid>
//             </Paper>
//    </Grid>
//  </Grid>
//       <Grid item container>
// {isCourse === "With Course" ?
// <>
// <SendDataBtn type="Send" disabled={false} >Send Data</SendDataBtn>
// </>: ""}
//  </Grid> </form>
//       )
//     }):""}
//     <Grid container>
//            {isCourse === "With Course"? <SendDataBtn onClick={()=>selectionHandler("Placement")} type="Next" disabled={!isDisabled} >Next Step</SendDataBtn>:""} 
//     </Grid>
//         </Paper>
//     </>
//   )
// }else{
//   return <Typography>Loading...</Typography>
// }

 
// }

// export default ClgTabCourse