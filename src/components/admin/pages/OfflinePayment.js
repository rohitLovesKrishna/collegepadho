import  { useState } from 'react'
import BluePrint from '../Global/BluePrint'
import { Box, Button, Grid, Paper, TextField, Typography ,FormControl,Select,MenuItem} from '@mui/material'


const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={0} ><Grid item lg={2} md={2} sm={11.6} xs={11.7} sx={{ml:'2px'}} ><Typography style={props.style} mr="5px" fontSize="12px" color="#646c9a" sx={{textAlign:{lg:'center', md:'center' , sm:'left' , xs:'left'}}} >{props.label}</Typography></Grid><Grid item lg={5} md={5} sm={12} xs={12} >  <FormControl sx={{ width: "100%", padding:'5px' }}> <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <input style={{width:"100%"}} onChange={props.onChangeSearch} value={props.search} type='search'/> <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid></Grid></>)}
const TextComponent = (props)=>{  return (<><Grid mb={2}  item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={0}> <Grid item lg={2} md={2} sm={11.6} xs={11.7} sx={{ml:'2px'}}><Typography style={props.style} mr="14px" fontSize="12px" color="#646c9a" sx={{textAlign:{lg:'center', md:'center' , sm:'left' , xs:'left'}}}>{props.label}</Typography></Grid> <Grid item lg={5} md={5} sm={12} xs={12}> <TextField sx={{padding:'5px'}} value={props.value} onChange={(e)=>{props.onChange(e)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small" id="searchInputadmin"  label={props.placeholder} variant="outlined"/></Grid></Grid></>)}
const NumberTextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center", }} spacing={0}> <Grid item lg={2} md={2} sm={11.7} xs={11.6}  sx={{ml:'2px'}}><Typography mr="0px" fontSize="12px" color="#646c9a" sx={{textAlign:{lg:'center', md:'center' , sm:'left' , xs:'left'}}}>{props.label}</Typography></Grid> <Grid item lg={5} md={5} sm={12} xs={12} > <TextField  sx={{padding:'5px'}} type="number" value={props.value} onChange={(e)=>{props.onChange(e)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small"   label={props.placeholder} variant="outlined"/></Grid></Grid></>)}

const OfflinePayment = () => {
    const [textField,setTextField] = useState({user:"",package:"",payment:"",method:""})
const [search,setSearch] = useState("")
const [search2,setSearch2] = useState("")
  return (
   <BluePrint page="Offline payment">
    <Grid item container component={Paper} mt="20px" pb="10px">
            <Grid item lg={12} md={12} sm={12} xs={12} mb="10px">
              <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                <Typography ml="10px" fontSize="18px">Offline payment</Typography>
              </Box>
            </Grid>
 <SelectComponent style={{marginRight:"70px"}} onChangeSearch={(e)=>{setSearch(e.target.value)}} search={search}   onChange={(e)=>{const newList ={...textField};newList.user = e.target.value;setTextField(newList)}} value={textField.user} label="User" placeholder="Select user" listItems={["Rohit","Rohit","Rohit","Rohit"]}/>
  <SelectComponent onChangeSearch={(e)=>{setSearch2(e.target.value)}} search={search2}   onChange={(e)=>{const newList ={...textField};newList.package = e.target.value;setTextField(newList)}} value={textField.package} label="Choose package" placeholder="Select package" listItems={[""]}/>
          <NumberTextComponent   onChange={(e)=>{const newList ={...textField};newList.payment = e.target.value;setTextField(newList)}} value={textField.payment}  label="Payment amount (Rs)" placeholder = 'Payment amt'/>
           <TextComponent    onChange={(e)=>{const newList ={...textField};newList.method = e.target.value;setTextField(newList)}} value={textField.method}  label="Payment method" placeholder = "Please input payment method" />
         <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          
         <Button   variant='contained' size='small' sx={{borderRadius:"50px",fontSize:{xs:"10px"}}}>Add user to package </Button>
         </Grid>
            </Grid>
   </BluePrint>
  )
}

export default OfflinePayment