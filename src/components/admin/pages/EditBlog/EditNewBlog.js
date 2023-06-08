import CssBaseline from '@mui/material/CssBaseline';
import SidebarAdmin from '../../Global/SisebarAdmin'
import NavBarTop from '../../Global/NavBarTop';
import HeaderAdmin from '../../Global/HeaderAdmin';
import {Box,Button, OutlinedInput,} from '@mui/material'
import { FormControl, Grid,MenuItem, Select, TextField, Typography,IconButton} from '@mui/material'
import {Add, ArrowCircleRightOutlined, Remove} from '@mui/icons-material';
import { useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import imglogo from '../../../assets/thumbnail.png'
import axios from 'axios';
import BASE_URL from '../../../constant';

const drawerWidth = '280px'
const TextComponent2 = (props)=>{  return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item lg={12} md={12} sm={12} xs={12}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={10} md={10} sm={10} xs={10}>{props.type === 'multiple'?<TextField sx={{mb:"20px"}} value={props.value2} onChange={(e)=>{props.onChange2(e,props.in,'title')}}  InputLabelProps={{ style: { fontSize: "10px"} }} fullWidth focused={false} autoFocus size="small"  label="Title" variant="outlined"/>:""} <TextField value={props.value} onChange={(e)=>{props.onChange(e,props.in,'desc')}}  InputLabelProps={{ style: { fontSize: "10px" } }} fullWidth focused={false}  size="small"  label={props.placeholder} variant="outlined"/></Grid>{props.type === 'multiple' && props.in <=0 ?<Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid>:""}{props.in > 0 && props.type === 'multiple'?<> <Grid item><IconButton size='small' onClick={props.onClick2}  sx={{bgcolor: "red",color: "white","&:hover": { bgcolor: "red" },}}><Remove /></IconButton></Grid><Grid item><IconButton size='small' onClick={props.onClick}  sx={{bgcolor: "green",color: "white","&:hover": { bgcolor: "green" },}}><Add /></IconButton></Grid></>:""}</Grid></>)}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const EditNewBlog = () => {
    const [streamApi, setStreamApi]=useState([])
    const [descriptionState,setDescriptionState] = useState([{title:"",description:""}])
    const[blogTitle, setBlogTitle]=useState("")
    const [category, setCategory] = useState([]);
    const [shortDescription, setshortDescription] = useState([]);
    const[mainTitle, setMainTitle]=useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(imglogo);
    
    

    const additionHandler =()=>{const newList =[...descriptionState,{title:"",description:""}];setDescriptionState(newList)}
    const removeHandler=(index)=>{const newList = [...descriptionState];newList.splice(index,1);setDescriptionState(newList)}
    const onChangeHandler =(event,index,val)=>{const newList = [...descriptionState];if(val === 'title'){newList[index].title = event.target.value}if(val === 'desc'){newList[index].description = event.target.value};setDescriptionState(newList)}     
 

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    const getApi=()=>{
        axios.get(`${BASE_URL}/api/stream`).then((res)=>{console.log(res);setStreamApi(res.data.response)})
    }

    useEffect(()=>{getApi()},[])



  

    const handleSend=()=>{
         const converted=JSON.stringify(descriptionState)
        const formData = new FormData()
        formData.append('title',blogTitle);
        formData.append('stream',category);
        formData.append('shortDescription',shortDescription);
        formData.append('mainTitle',mainTitle);
        formData.append('myFile',selectedImage);
        formData.append('content',converted)
        
        axios.post(`${BASE_URL}/api/blog`,formData).then((res)=>{alert(res.data.message)})

    }


    console.log(descriptionState)
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
           <Grid container  sx={{backgroundColor:'white',p:"10px"}} spacing={1}>
          
          <Grid item container justifyContent="space-between" alignItems="center" mt="15px">
           <Grid item>
              <Button id="addnewuser_btnText" startIcon={<ArrowCircleRightOutlined/>} sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new blog</Button>
             <Button id="addnewuser_btnText2" sx={{fontWeight:500,fontSize:"20px",color:"#212529",textTransform:"unset"}}>Add new blog</Button>
           </Grid>
          </Grid>
  
        {/* paste your component (code) here  */}
        {/* <Dashboard/> */}
       
            <Grid item xs={12} sx={{backgroundColor:'#1e1e2d', color:'white'}}>
                <Typography >Blog add form</Typography>
            </Grid>
           
            <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography color="#646c9a" fontSize="1rem"  sx={{ mt: "5px", mr: "15px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Blog title</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6.5} lg={6.5}>
                <OutlinedInput placeholder='Provide blog title' sx={{height:'40px'}} fullWidth onChange={(e)=>{setBlogTitle(e.target.value)}}/>
                </Grid>

              
               <Grid item xs={12} sm={12} md={3} lg={3}>
               <Typography color="#646c9a" fontSize="1rem"  sx={{ mt: "5px", mr: "15px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Category</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6.5} lg={6.5}>
                    <FormControl  fullWidth  >
        <InputLabel > category</InputLabel>
        <Select 
        placeholder='categories'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={category}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          sx={{height:"40px"}}
        >
          {streamApi.map((ele) => (
            <MenuItem
             
              value={ele.stream}
            >
              {ele.stream}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>    
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Typography color="#646c9a" fontSize="1.2rem"  sx={{ mt: "5px", mr: "15px",textAlign:{xs:"left",sm:"left",md:"right",lg:"right"} }}>Short Description</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6.5} lg={6.5}>
                <OutlinedInput placeholder='Provide short description' fullWidth sx={{height:'40px'}} onChange={(e)=>{setshortDescription(e.target.value)}} />
                </Grid> 
                
               {descriptionState.map((item,index)=>{
      return (<TextComponent2  key={item+index} onChange2={onChangeHandler} onChange={onChangeHandler} value={descriptionState[index].description} value2={descriptionState[index].title} onClick2={()=>removeHandler(index)}  onClick={additionHandler}  type ="multiple" in={index}    label="Description"  placeholder = "Enter details here.."/>
)})}
   
               <Grid item container lg={12} xs={12}  >
               <Grid mb={2} item container > 
               <Grid item lg={3} md={3} sm={12} xs={12}  sx={{display:"flex",justifyContent:{xs:"center",sm:"center",md:"flex-end",lg:"flex-end"}}}><Typography mr="14px" fontSize="1rem" color="#646c9a" sx={{textAlign:{xs:"left",sm:"left",md:"right",lg:"right"}}}>Location thumbnail (400 x 225)</Typography>
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

               <Grid item xs={12} sx={{display:'flex', alignItems:'center', justifyContent:'center',  padding:'13px 0px 13px 0px'}}>
                <Button variant='contained' sx={{borderRadius:'7px', padding:'5px 45px 5px 45px'}} onClick={handleSend}>Add Blog</Button>
               </Grid>

               </Grid>
                
              



            </Grid>
        </Box>
             </Box>
    </>
  )
}

export default EditNewBlog;