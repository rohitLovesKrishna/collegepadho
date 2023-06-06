import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../../Global/SisebarAdmin'
import NavBarTop from '../../Global/NavBarTop';
import HeaderAdmin from '../../Global/HeaderAdmin';
import {Button,IconButton,Box, Paper,FormControl, Grid,MenuItem, Select, TextField, Typography, Divider} from '@mui/material'
import {Add,Remove} from '@mui/icons-material'
import emptyImage from '../../../assets/emptyImage.jpg'
import {ArrowCircleRightOutlined} from '@mui/icons-material';
import { useState ,useEffect} from 'react';
import IconPickerr from '../../Global/IconPicker'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../../constant';
import { useParams } from 'react-router-dom';
import Loader from '../../../Loader';

const drawerWidth = '280px'
const TextComponent = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={12} md={12} sm={12} xs={12}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}>{props.label === "Icon Picker"?<IconPickerr value={props.value} onChange={props.onChange}/> :  <TextField value={props.value} onChange={(e)=>{props.onChange(e,props.in)}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false} autoFocus size="small"  label={props.placeholder} variant="outlined"/>}</Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'?<> <Grid item><IconButton size='small' onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid><Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid></>:""}</Grid></>)}
const SelectComponent = (props)=>{return( <><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={5} md={5} sm={5} xs={5}>  <FormControl sx={{ width: "100%" }}> <Select  displayEmpty  style={{fontSize:"10px"}} renderValue={(selected) => {if (selected.length === 0) {return <em>{props.placeholder}</em>;}return props.value}} value={props.value}  onChange={(e)=>{props.onChange(e,props.in)}} onClick={(event) => event.stopPropagation()} size="small" id="mylabel"  labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>   <TextField fullWidth focused={false} autoFocus size='small' id="searchInputadmin" label="Search" variant="outlined" />{props.listItems.map((item)=>{return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>)})}</Select></FormControl></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'? <Grid item><IconButton size='small' onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid>:""}</Grid></>)}

const EditNewStream = () => {
  const param = useParams()
    // const navigate = useNavigate()
    const [data, setData]=useState([])
    const [value, setValue] = useState("")
    const [isStream,setIsStream] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(emptyImage);
    const [dataToSend,setDataToSend] = useState({stream:"",parentStream:""});
    const getApi=()=>{axios.get(`${BASE_URL}/api/parentStream`).then((res)=>{setData(res.data.responses)})}
    useEffect(()=>{getApi()},[])
     const handleUpload=()=>{
        // const formdata= new FormData()
        // formdata.append("myFile",selectedImage)
        // formdata.append('stream',dataToSend.stream)
        // formdata.append('parentStream',dataToSend.parentStream)
        // formdata.append('icon',value)
        // axios.post(`${BASE_URL}/api/stream`,formdata).then((res)=>{alert("successfull");console.log(res)}).catch((err)=>{console.log(err);alert("Unsuccessfull")})
      }
    const fetchStream =()=>{
      axios.get(`${BASE_URL}/api/stream`).then((res)=>{setIsStream(res.data.response.filter((item)=>{return item._id === param.id}))})
    }
    useEffect(()=>fetchStream(),[])
    useEffect(()=>{if(isStream.length > 0){setDataToSend({stream:isStream[0].stream,parentStream:isStream[0].parentStream});setImageUrl(isStream[0].image);setValue(isStream[0].icon)}},[isStream])
    if(isStream.length > 0){
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
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new stream</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new stream</Button>
           </Grid>
          </Grid>
  
        {/* paste your component (code) here  */}
    <Grid item container component={Paper} mt="20px">
             <Grid item lg={12} md={12} sm={12} xs={12}>
               <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                 <Typography ml="10px" fontSize="18px"> Stream add form</Typography>
               </Box>
             </Grid>
                      <Paper sx={{p:"20px",width:"100%"}} elevation={2} >
                     <TextComponent  in={0}  onChange={(e,i)=>{const newList ={...dataToSend};newList.stream = e.target.value;setDataToSend(newList)}} value={dataToSend.stream}  label="Stream" placeholder = "Provide category name." />
                     <SelectComponent  in={1} onChange={(e,i)=>{const newList ={...dataToSend};newList.parentStream = e.target.value;setDataToSend(newList)}} value={dataToSend.parentStream} label="Parent Stream" placeholder="None" listItems={data.map((ele)=>{return (ele)})}/> 
                      <TextComponent onChange={(v) => setValue(v)} value={value}    label="Icon Picker" placeholder = "Click here to select.." />
               <Grid mb={2} item container > 
    <Grid item lg={3} md={3} sm={12} xs={12}  sx={{display:"flex",justifyContent:{xs:"center",sm:"center",md:"flex-end",lg:"flex-end"}}}><Typography mr="14px" fontSize="17px" color="#646c9a" sx={{textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}}}>Stream  image<br/>400 X 255</Typography>
    </Grid> 
    <Grid item lg={3} md={3} sm={12} xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:{xs:"center",sm:"center",md:"flex-start",lg:"flex-start"}}}>
        <img width="100%" height="230px" htmlFor="searchInputadmin9" src={imageUrl} alt="empty">
        </img>   <br/>
        <Button component="label" htmlFor="searchInputadmin9">
            Select image
       <TextField onChange={(e) => {setImageUrl(URL.createObjectURL(e.target.files[0]));setSelectedImage(e.target.files[0])}} style={{display:"none"}} accept="image/jpg"  type='file' hidden  fullWidth size="small" id="searchInputadmin9"   variant="outlined"/>
            </Button>     
         </Grid>
         </Grid>
                  <Divider/>
                  <Grid item sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
         <Button  variant='contained' size='small' sx={{borderRadius:"50px",mt:"20px"}} onClick={handleUpload}>Add Stream</Button>
                  </Grid>
              </Paper>
             </Grid>
            </Grid>
             </Box>
         </Box>
    </>
  )
    }
    else{
      return <Grid container justifyContent={"center"} alignItems={"center"} >
        <Loader/>
        </Grid>
    }
  
}


export default EditNewStream