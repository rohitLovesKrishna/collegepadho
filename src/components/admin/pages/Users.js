import { Typography,Box, Grid, Paper, TextField} from '@mui/material'
import { useState } from 'react';
import "../AdminMaster.css"
import photo from '../../assets/user.jpeg'
import BluePrint from '../Global/BluePrint'
import TableUsers from '../Global/TableUsers';
const dummyData = [
    {
        id:1,photo:photo,name:"Rohit",email:'ambawata.11@gmail.com',phone:8080808080
    },{
        id:2,photo:photo,name:"Rohit",email:'ambawata.11@gmail.com',phone:8080808080
    },{
        id:3,photo:photo,name:"Rohit",email:'ambawata.11@gmail.com',phone:8080808080
    },{
        id:4,photo:photo,name:"Rohit",email:'ambawata.11@gmail.com',phone:8080808080
    },{
        id:5,photo:photo,name:"Rohit",email:'ambawata.11@gmail.com',phone:8080808080
    },

]

const Users = () => {
    const [rows,setRows] =useState(10);
  const changeRowsHandler = (e)=>{setRows(e.target.value)}
  return (
   <>
   <BluePrint page="Users">
     <Grid item container component={Paper} mt="20px">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box sx={{width:"100%",bgcolor:"#282a3c",color:"white",height:"40px",display:"flex",alignItems:"center"}}>
                <Typography ml="10px" fontSize="18px">General user list</Typography>
              </Box>
            </Grid>
             
     <Paper id="collegePagePaper" sx={{p:"20px",width:"100%",m:"20px"}} elevation={2} >
      <Grid item container justifyContent='space-evenly' alignItems="center" spacing={2}>
         <Grid item xs={12} lg={6} md={6} sm={6}  >
      <Box sx={{display:"flex",justifyContent:{sm:"left",md:"left",lg:"left",xs:"center"},alignItems:"center"}}>
      <Typography mr="5px" sx={{fontSize:"13px",color:"#6c7293"}}>Show</Typography>
      <div>
     <select onChange={changeRowsHandler}  style={{border:"1px solid #ebedf2",padding:"4px 10px",outline:"none"}} name="ok" >
              <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
            </select>
      </div>

             <Typography ml="5px" sx={{fontSize:"13px",color:"#6c7293"}}>enteries</Typography>
      </Box>

    </Grid>
    <Grid item xs={12} lg={6} md={6} sm={6}>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:{sm:"right",md:"right",lg:"right",xs:"center"}}}>
      <Typography  sx={{fontSize:"13px",color:"#6c7293"}} >Search:</Typography>
       <TextField focused={false} sx={{border:"1px solid #ebedf2"}}  size='small' id="searchInputadmin" label="Search" variant="outlined" />
      </Box>
    </Grid>
    <Grid item xs={12} lg={12} md={12} sm={12}>
          <TableUsers dummyData={dummyData} rows={rows} setRows={setRows}/>
    </Grid>
      </Grid>
    </Paper>
              </Grid>
   </BluePrint>
   </>
  )
}

export default Users