import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination, Box,Button,Checkbox,FormControlLabel,Menu,MenuItem,Typography, TableFooter } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function TableBLog({rows,setRows,dummyData}) {
  const [page, setPage] = useState(0);
  const [isBlog,setIsBlog] = useState(null)
  const handleChangePage = (_, newPage) => {setPage(newPage);};
  const handleChangeRowsPerPage = (event) => {setRows(event.target.value);setPage(0);};
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event,id) => {setAnchorEl(event.currentTarget);setIsBlog(id)};
  const handleClose = () => {setAnchorEl(null);};
 console.log(dummyData)
  return (
    <>
    <TableContainer  >
  <Table stickyHeader={true} responsive='true'>
    <TableHead>
      <TableRow>
        <TableCell><b>#</b></TableCell>
        <TableCell><b>Title</b></TableCell>
    <TableCell><b>Categories</b></TableCell>
     <TableCell><b>Status</b></TableCell>
      <TableCell><b>Option</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dummyData.slice(page*rows,(page*rows)+rows).map((college,index)=>{
        if(dummyData.length > 0){
                    return (              
      <TableRow key={college._id}>
      <TableCell>
         <FormControlLabel control={<Checkbox />} label={index+1} />
        </TableCell>
      <TableCell>
        <Typography fontWeight={700}>{college.title}</Typography>
      </TableCell>
      <TableCell>

      <Typography>{college.stream}</Typography> 
       
        </TableCell>
      <TableCell><Button color='success' variant='contained' sx={{height:"15px",fontSize:"7px"}}>Active</Button></TableCell>
      <TableCell>
        <Button onClick={(e,id)=>handleClick(e,college._id)} disableRipple endIcon={<ArrowDropDownIcon/>} sx={{bgcolor:"#42A5F5 ",borderRadius:"50px",width:"100%"}} variant="contained" color="primary" >
        Action
      </Button>
      </TableCell>
      </TableRow>
        )
        }
      })}
    </TableBody>
    <TableFooter>
      <TableRow>
  <TablePagination  
       page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rows}
      onRowsPerPageChange={handleChangeRowsPerPage}
  count={dummyData.length} variant="outlined" shape="rounded" />
      </TableRow>
    </TableFooter>
  </Table>
            {dummyData.length < 1?<Typography textAlign={"center"}>No data available in table</Typography>:"" }
</TableContainer>


     <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}} >
        <MenuItem onClick={handleClose}>View in website</MenuItem>
        <MenuItem onClick={()=>navigate(`/admin/editblog/${isBlog}`)}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Mark as pending</MenuItem>
        <MenuItem onClick={handleClose}>Mark as featured</MenuItem>
      </Menu>
 </>

  );
}