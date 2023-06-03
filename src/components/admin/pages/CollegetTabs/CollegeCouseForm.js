import { useState,useEffect } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormControl from '@mui/material/FormControl';
import {TextareaAutosize, TextField,Grid, Paper, Typography,Select,MenuItem, Button, Box, Divider } from '@mui/material'
import emptyImage from '../../../assets/emptyImage.jpg'
import SendDataBtn from "../../Global/SendDataBtn";

const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item sx={{width:'100%'}}><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}>  <FormControl sx={{ width: "100%" }}> <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e,props.in)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid></Grid></>)}
const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item sx={{width:'100%'}}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}> <TextField value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small" id="searchInputadmin"  label={props.placeholder} variant="outlined"/></Grid></Grid></>)}
const TextareaAutosizeComponent=(props)=>{return ( <Grid  mb={2}  item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}><Grid item sx={{width:'100%'}}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}><TextareaAutosize value={props.value} onChange={(e)=>{props.onChange(e,props.in)}} style={{ width: "100%", outline: "none" }} placeholder={props.placeholder} minRows={props.rows}/></Grid></Grid>)}

const AddForm = (props)=>{
const [dataForm,setDataForm] = useState([{stream:""},{courseLevel:""},{courseName:""},{courseDesc:""},{courseFee:""},{seats:""},{duration:""},{courseDeliveryMode:""},{entranceExams:""},{tutionFees:""},{specialisation:""}]);
const [selectedImage, setSelectedImage] = useState(null);
const [imageUrl, setImageUrl] = useState(emptyImage);
useEffect(() => {if (selectedImage) {setImageUrl(URL.createObjectURL(selectedImage));}}, [selectedImage]);
// console.log(dataForm);
    return (
        <>
          <Grid   mb={2}  item container sx={{display:'flex',justifyContent: "center", alignItems: "center" }} spacing={2}>

            <Paper sx={{m:"20px",p:"18px",width:"100%",mb:0}} elevation={0}>
                            <Divider sx={{border:"1px solid gray",m:"10px"}}/>
                <Typography>Add course</Typography>
                <Button  onClick={props.onClick}>Remove</Button>
                 <SelectComponent in={0} onChange={(e,i)=>{const newList =[...dataForm];newList[i].stream = e.target.value;setDataForm(newList)}} value={dataForm[0].stream} label="Stream" placeholder="Select Stream" listItems={["Management","Engineering","Pharmacy","Dental","Education","Journalism","Law","Medical","Architecture","Arts and Humanities","Information Technology","Commerce and Banking","Hotel Management","Design Colleges"]}/>
                  <SelectComponent in={1} onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseLevel = e.target.value;setDataForm(newList)}} value={dataForm[1].courseLevel} label="Course Level" placeholder="Select Course Level" listItems={["Graduation","Post Graduation"]}/>
                  <TextComponent  in={2}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseName = e.target.value;;setDataForm(newList)}} value={dataForm[2].courseName}  label="Course name" placeholder = "Enter course name.." />
                <TextareaAutosizeComponent  in={3}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseDesc = e.target.value;;setDataForm(newList)}} value={dataForm[3].courseDesc} label="Course description" rows={6} />
                <TextComponent  in={4}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseFee = e.target.value;;setDataForm(newList)}} value={dataForm[4].courseFee}  label="Course fee" placeholder = "Please enter only number" />
                <TextComponent  in={5}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].seats = e.target.value;;setDataForm(newList)}} value={dataForm[5].seats}  label="Number of seats" placeholder = "Please enter only number" />
                <TextComponent  in={6}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].duration = e.target.value;;setDataForm(newList)}} value={dataForm[6].duration}  label="Duration" placeholder = "Please enter only number" />
                 <SelectComponent in={7} onChange={(e,i)=>{const newList =[...dataForm];newList[i].courseDeliveryMode = e.target.value;setDataForm(newList)}} value={dataForm[7].courseDeliveryMode} label="Course delivery mode" placeholder="Select Course Delivery Mode" listItems={["Regular","Evening","Online"]}/>
                <TextareaAutosizeComponent  in={8}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].entranceExams = e.target.value;;setDataForm(newList)}} value={dataForm[8].entranceExams} label="Entrance exams accepted" rows={6} />
                 <TextComponent  in={9}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].tutionFees = e.target.value;setDataForm(newList)}} value={dataForm[9].tutionFees}  label="Total tution fees (Rs.)" placeholder = "Please enter only number" />
                  <TextareaAutosizeComponent  in={10}  onChange={(e,i)=>{const newList =[...dataForm];newList[i].specialisation = e.target.value;setDataForm(newList)}} value={dataForm[10].specialisation} label="Specialisation" rows={6} />
                  <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                     <Paper  sx={{border:"1px solid #ebedf2",width:"70%",height:"fit-content",display:"flex",alignItems:"center",p:"10px",flexDirection:"column"}} elevation={3}>
                         <img width="100%" height="90%" htmlFor="searchInputadmin" src={imageUrl} alt="empty"></img>
                         <Button component={"label"} disableRipple><input onChange={e => setSelectedImage(e.target.files[0])} type='file' hidden={true} color="#646c9a"/> <CameraAltIcon/>Upload course image(800x533)</Button>
                     </Paper>
            </Grid>
            </Paper>
   </Grid>

        </>
    )
}
export default  AddForm