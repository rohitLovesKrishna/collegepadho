import React, { useEffect, useState } from 'react'
import BluePrint from '../Global/BluePrint'
import emptyImage from '../../assets/emptyImage.jpg'
import { Box, Button, Grid, Paper, TextField, Typography ,FormControl,Select,MenuItem,IconButton,} from '@mui/material'


const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item><Typography mr="5px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={5} md={5} sm={5} xs={5}>  <FormControl sx={{ width: "100%" }}> <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid></Grid></>)}
const TextComponent = (props)=>{  return (<><Grid mb={2}  item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item><Typography style={props.style} mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={5} md={5} sm={5} xs={5}> <TextField value={props.value} onChange={(e)=>{props.onChange(e)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small" id="searchInputadmin"  label={props.placeholder} variant="outlined"/></Grid></Grid></>)}

const AddAdvertisment = () => {
    const [textField,setTextField] = useState({adname:"",adorder:"",adurl:"",adposition:""})
    const [imageUrl2, setImageUrl2] = useState(emptyImage);
    const [selectedImage2, setSelectedImage2] = useState(null);
    useEffect(() => {if (selectedImage2) {setImageUrl2(URL.createObjectURL(selectedImage2));}}, [selectedImage2]);
  return (
   <BluePrint page="Add advertisement">
    <Grid item container component={Paper} mt="20px">
            <Grid item lg={12} md={12} sm={12} xs={12} mb="10px">
              <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                <Typography ml="10px" fontSize="18px">Add new advertisement</Typography>
              </Box>
            </Grid>

         <TextComponent    onChange={(e)=>{const newList ={...textField};newList.adname = e.target.value;setTextField(newList)}} value={textField.adname}  label="Ad name" placeholder = "Ad name" />
         <TextComponent    onChange={(e)=>{const newList ={...textField};newList.adorder = e.target.value;setTextField(newList)}} value={textField.adorder}  label="Ad order" placeholder = "Ad order" />
         <TextComponent style={{marginRight:"30px"}}   onChange={(e)=>{const newList ={...textField};newList.adurl = e.target.value;setTextField(newList)}} value={textField.adurl}  label="Ad url" placeholder = "Ad url" />
        <SelectComponent   onChange={(e)=>{const newList ={...textField};newList.adposition = e.target.value;setTextField(newList)}} value={textField.adposition} label="Ad position" placeholder="Select position" listItems={["Header","Footer","Body Between Section","Right Side Clg List Page","Right Side Clg Detail Page"]}/>

<Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> 
    <Grid item><Typography mr="14px" fontSize="12px" color="#646c9a"> Ad image</Typography>
    </Grid> 
    <Grid item lg={5} md={5} sm={5} xs={5}>

        <Button sx={{width:"50%"}} disableRipple component="label" htmlFor="searchInputadmin2">
            <Grid item >
 <img width="100%" height="100%" htmlFor="searchInputadmin2" src={imageUrl2} alt="empty"></img>               <br/>
            Select image
            </Grid>
       <TextField onChange={e => setSelectedImage2(e.target.files[0])} style={{display:"none"}} accept="image/jpg"  type='file' hidden  fullWidth size="small" id="searchInputadmin2"   variant="outlined"/>
            </Button>     
         </Grid></Grid>
         <Button  fullWidth variant='contained' size='small' sx={{borderRadius:"50px",fontSize:{xs:"10px"}}}>Add Advertisment </Button>

{/* details */}
<Grid container>
<Grid item lg={12} md={12} sm={12} xs={12}>
<Typography sx={{fontSize:{lg:"18px",md:"12px",sm:"10px",xs:"10px"}}}>
    <pre >
        <b>
        Note:<br/>
Allowed Ad Sized:<br/>
- 728 (W) × 90 (H)<br/>
- 250 (W) × 250 (H)<br/>
- 300 (W) × 600 (H)<br/>
- 320 (W) × 100 (H)<br/>
- 980 (W) × 120 (H)<br/>
        </b>
    </pre>
</Typography>
</Grid>

<Grid item lg={12} md={12} sm={12} xs={12}>
<Typography sx={{fontSize:{lg:"18px",md:"12px",sm:"10px",xs:"10px"}}} >
    <pre >
        <b>
Position for Ad Size:<br/>
Header/Footer/Between Section<br/> - 728 (W) × 90 (H)<br/>
Right Side in College Detail Page<br/> - 250 (W) × 250 (H)<br/>
Right Side in College Detail Page<br/> - 300 (W) × 600 (H)<br/>
Right Side in College Detail Page<br/> - 320 (W) × 100 (H)<br/>
Header/Footer/Between Section<br/> - 980 (W) × 120 (H)<br/>
        </b>
    </pre>
</Typography>
</Grid>

<Grid item lg={12} md={12} sm={12} xs={12}>
<Typography >
    <pre style={{flexWrap:"wrap",fontSize:"8px"}}>
Don't use same order for multiple ad.<br/>
Order will manage, advertisement slide position.<br/>
Use Compressed Ad.<br/>
    </pre>
</Typography>
</Grid>
</Grid>


            </Grid>
   </BluePrint>
  )
}

export default AddAdvertisment