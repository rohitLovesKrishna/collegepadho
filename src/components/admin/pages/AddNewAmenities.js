import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import {Box,Grid,Button, Paper, Typography, TextField} from '@mui/material'
import {ArrowCircleRightOutlined} from '@mui/icons-material';
import { useState } from 'react';
import IconPickerr from '../Global/IconPicker';
import axios from 'axios';
import BASE_URL from '../../constant';
import { useNavigate } from 'react-router-dom';

const drawerWidth = '280px'
const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={12} md={12} sm={12} xs={12}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}>{props.label === "Icon Picker"?<IconPickerr value={props.value} onChange={props.onChange}/> :  <TextField value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small"   label={props.placeholder} variant="outlined"/>}</Grid></Grid></>)}

const AddNewAmenities = () => {
const navigate = useNavigate();
const [value, setValue] = useState("")
const [textField,setTextField] = useState({amenitytitle:""});
const dataToServer = ()=>{
 axios.post(`${BASE_URL}/api/amenity`,{amenity:textField.amenitytitle,icon:value}).then((res)=>{alert("Amenity added succesfully!");setTextField({amenitytitle:""});setValue("");}).then((err)=>{console.log(err);})
}
// navigate('/admin/amenities')
  return (
    <>
        <CssBaseline /> 
        {/* when screen size is small NavBar entry from top  */}
           <Box sx={{alignItems:"center",height:"80px",display:{xs:"flex",md:"none",lg:"none",sm:"flex"},justifyContent:"right",pr:"20px",bgcolor:" #1e1e2d",color:"white"}}>
             <NavBarTop/>
           </Box>

            {/* when screen size is lg and md */}
           <SidebarAdmin />
            <Box sx={{ml:{lg:drawerWidth,md:drawerWidth}}}>
               <Box component="main" sx={{ bgcolor: "#f2f3f8", p: 3,width:"100%" }}>
                   <HeaderAdmin /> 

                {/* pages starts */}
                   <Grid container>
          
          <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
           <Grid item>
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new amenity</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new amenity</Button>
           </Grid>
          </Grid>

          <Grid item container component={Paper} mt="20px">
           <Grid item lg={12} md={12} sm={12} xs={12}> <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                 <Typography ml="10px" fontSize="18px">Add new amenity</Typography>
             </Box>
             </Grid>
                   {/* paste your component (code) here  */}
     <Paper id="collegePagePaper" sx={{p:"20px",width:"100%",m:"20px"}} elevation={2} >
      <Grid item container justifyContent='space-evenly' alignItems="center" spacing={2}>

 <TextComponent  in={0}  onChange={(e)=>{const newList ={...textField};newList.amenitytitle = e.target.value;setTextField(newList)}} value={textField.amenitytitle}  label="Amenity title" placeholder = "Provide amenity name." />
        <TextComponent onChange={(v) => setValue(v)} value={value}    label="Icon Picker" placeholder = "Click here to select.." />
      </Grid>
      <Grid item justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Button onClick = {dataToServer} variant='contained' size="small" sx={{borderRadius:"50px"}}>Add amenity</Button>
      </Grid>

    </Paper>
        </Grid>

            </Grid>
             </Box>
         </Box>
    </>
  )
}

export default AddNewAmenities