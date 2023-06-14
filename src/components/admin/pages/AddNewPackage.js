import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../Global/SisebarAdmin'
import NavBarTop from '../Global/NavBarTop';
import HeaderAdmin from '../Global/HeaderAdmin';
import {FormGroup,Box,Button, Divider, MenuItem, Select,FormControl,TextField,Checkbox,FormControlLabel} from '@mui/material'
import {  Grid, Typography} from '@mui/material'
import {ArrowCircleRightOutlined} from '@mui/icons-material';
import { useState } from 'react';

const drawerWidth = '280px'
const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={1.4} md={1.4} sm={1.4} xs={1.4}><Typography mr="0px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={5} md={5} sm={5} xs={5}> <TextField value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small" id="searchInputadmin"  label={props.placeholder} variant="outlined"/></Grid></Grid></>)}
const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={5} md={5} sm={5} xs={5}>  <FormControl sx={{ width: "100%" }}> <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e,props.in)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid></Grid></>)}
const NumberTextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={1.4} md={2} sm={2} xs={2}><Typography mr="0px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={5} md={5} sm={5} xs={5}> <TextField  type="number" value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small"   label={props.placeholder} variant="outlined"/></Grid></Grid></>)}

const AddNewPackage = () => {
    const [textField,setTextField] = useState([{packagetype:""},{packagename:""},{price:""},{validity:""},{listings:""},{categories:""},{tags:""},{photos:""},{abilityvideo:false},{abilitycontact:false},{abilityrecommended:false},{featured:false}])
console.log(textField);
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
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new package</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new package</Button>
           </Grid>
          </Grid>
  
        {/* paste your component (code) here  */}
        <Grid item container xs={12} sx={{backgroundColor:'white'}}>
            <Grid item xs={12} sx={{backgroundColor:'#1e1e2d', color:'white', padding:'10px',mb:'20px'}}>
                <Typography >Add new package</Typography>
            </Grid>
<SelectComponent in={0}  onChange={(e,i)=>{const newList =[...textField];newList[i].packagetype = e.target.value;setTextField(newList)}} value={textField[0].packagetype} label="Package type" placeholder="Select Type" listItems={["Free","Paid"]}/>
            <Divider sx={{width:"100%",mb:"10px"}}/>
             <TextComponent  in={1}  onChange={(e,i)=>{const newList =[...textField];newList[i].packagename = e.target.value;;setTextField(newList)}} value={textField[1].packagename}  label="Package name" placeholder = "Package name."/>
         <Divider sx={{width:"100%",mb:"10px"}}/>
         <TextComponent  in={2}  onChange={(e,i)=>{const newList =[...textField];newList[i].price = e.target.value;;setTextField(newList)}} value={textField[2].price}  label="Price(Rs)" placeholder = "Price"/>
          <Divider sx={{width:"100%",mb:"10px"}}/>
         <NumberTextComponent  in={3}  onChange={(e,i)=>{const newList =[...textField];newList[i].validity = e.target.value;;setTextField(newList)}} value={textField[3].validity}  label="Validity in days
" placeholder = 'Validity in days'
/><Divider sx={{width:"100%",mb:"10px"}}/>
<NumberTextComponent  in={4}  onChange={(e,i)=>{const newList =[...textField];newList[i].listings = e.target.value;;setTextField(newList)}} value={textField[4].listings}  label="Number of listings
" placeholder = 'Number of listings'
/><Divider sx={{width:"100%",mb:"10px"}}/>
<NumberTextComponent  in={5}  onChange={(e,i)=>{const newList =[...textField];newList[i].categories = e.target.value;;setTextField(newList)}} value={textField[5].categories}  label="Number of categories
" placeholder = 'Number of categories'
/><Divider sx={{width:"100%",mb:"10px"}}/>
<NumberTextComponent  in={6}  onChange={(e,i)=>{const newList =[...textField];newList[i].tags = e.target.value;;setTextField(newList)}} value={textField[6].tags}  label="Number of tags
" placeholder = 'Number of tags'
/><Divider sx={{width:"100%",mb:"10px"}}/>
<NumberTextComponent  in={7}  onChange={(e,i)=>{const newList =[...textField];newList[i].photos = e.target.value;;setTextField(newList)}} value={textField[7].photos}  label="Number of photos
" placeholder = 'Number of photos'
/><Divider sx={{width:"100%",mb:"10px"}}/>
<Grid item conatiner lg={12}>
    <Grid item lg={12} sx={{justifyContent:"center",alignItems:"center" ,display:"flex"}}>
<FormGroup >
      <FormControlLabel control={<Checkbox checked={textField[8].abilityvideo} onChange={(e)=>{const newList =[...textField];newList[8].abilityvideo = e.target.checked;setTextField(newList)}} />} label="Ability to add video" />
      <FormControlLabel  control={<Checkbox checked={textField[9].abilitycontact} onChange={(e)=>{const newList =[...textField];newList[9].abilitycontact = e.target.checked;setTextField(newList)}}  />} label=" Ability to add contact form" />
      <FormControlLabel  control={<Checkbox checked={textField[10].abilityrecommended} onChange={(e)=>{const newList =[...textField];newList[10].abilityrecommended = e.target.checked;setTextField(newList)}}  />} label=" Mark this package as recommended" />
       <FormControlLabel  control={<Checkbox checked={textField[11].featured} onChange={(e)=>{const newList =[...textField];newList[11].featured = e.target.checked;setTextField(newList)}}  />} label=" Featured" />
    </FormGroup>
    </Grid>
</Grid>
<Grid item conatiner lg={12}>
    <Grid item lg={12} sx={{justifyContent:"center",alignItems:"center" ,display:"flex",m:"10px"}}>
<Button variant='contained' sx={{borderRadius:"50px"}}>Save</Button>
    </Grid>

</Grid>
        </Grid>
            </Grid>
             </Box>
         </Box>
    </>
  )
}

export default AddNewPackage