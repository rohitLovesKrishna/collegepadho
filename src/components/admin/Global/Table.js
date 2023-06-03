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


export default function TableMain({rows,setRows,dummyData}) {
  const navigate = useNavigate();
  const [page, setPage] =useState(0);
  const [actionOn,setActionOn] = useState(null)
  const handleChangePage = (_, newPage) => {setPage(newPage);};
  const handleChangeRowsPerPage = (event) => {setRows(event.target.value);setPage(0);};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event,id) => {setAnchorEl(event.currentTarget);setActionOn(id);};
  const handleClose = () => {setAnchorEl(null);};

const handleEdit=()=>{
  navigate(`/admin/editcollege/${actionOn}`)
}
  return (
    <>
    <TableContainer  >
  <Table stickyHeader={true} responsive='true'>
    <TableHead>
      <TableRow>
        <TableCell align='center'><b>#</b></TableCell>
        <TableCell align='center'><b>Title</b></TableCell>
  <TableCell align='center'><b>Categories</b></TableCell>
    <TableCell align='center'><b>Location</b></TableCell>
      <TableCell align='center'><b>Status</b></TableCell>
      <TableCell align='center'><b>Option</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dummyData.slice(page*rows,(page*rows)+rows).map((college,index)=>{
        return (
      <TableRow key={college._id}>
      <TableCell align='center'>
         <FormControlLabel control={<Checkbox />} label={index+1} />
        </TableCell>
      <TableCell align='center'>
        <Typography fontWeight={700} fontSize={'14px'}>{college.collegeName}</Typography>
        <Typography fontSize="12px">College Padho</Typography>
        <Typography fontSize="12px">22 June 2023</Typography>
      </TableCell>
<TableCell>
        {college.stream.slice(0,3).map((item)=>{
          return (
      <Box key={item}  sx={{mb:"1px",display:"flex",justifyContent:"center",bgcolor:"#999999",borderRadius:"50px",color:"white",fontSize:"10px"}}>{item}</Box>
          )
        })}
        </TableCell>
      <TableCell align='center'>{college.location},{college.country}</TableCell>
      <TableCell align='center'><LensIcon  sx={{color:"green",fontSize:'13px'}}/></TableCell>
      <TableCell align='center'>
        <Button onClick={(e)=>handleClick(e,college._id)} disableRipple endIcon={<ArrowDropDownIcon/>} sx={{bgcolor:"#42A5F5 ",borderRadius:"50px",width:"100%"}} variant="contained" color="primary" >
        Action
      </Button>
      </TableCell>
      </TableRow>
        )
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
</TableContainer>


     <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}} >
        <MenuItem onClick={handleClose}>View in website</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Mark as pending</MenuItem>
        <MenuItem onClick={handleClose}>Mark as featured</MenuItem>
      </Menu>
    </>

  );
}