import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import photo from '../../assets/user.jpeg'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination,Button,Menu,MenuItem,Typography, TableFooter } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';


export default function TableUsers({rows,setRows,originalData}) {
  const [page, setPage] = useState(0);
  const handleChangePage = (_, newPage) => {setPage(newPage);};
  const handleChangeRowsPerPage = (event) => {setRows(event.target.value);setPage(0);};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {setAnchorEl(event.currentTarget);};
  const handleClose = () => {setAnchorEl(null);};

  const handleChangeStatus = (e,id)=>{
console.log(id)
  }

  if(originalData.length > 0){
 return (
    <>
    <TableContainer  >
  <Table stickyHeader={true} responsive='true'>
    <TableHead>
      <TableRow>
        <TableCell  align="center"><b>#</b></TableCell>
        <TableCell align="center"><b>Photo</b></TableCell>
    <TableCell align="center"><b>Name</b></TableCell>
      <TableCell align="center"><b>Email</b></TableCell>
      <TableCell align="center"><b>Phone</b></TableCell>
      <TableCell align="center"><b>Status</b></TableCell>
      <TableCell align="center"><b>Option</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {originalData.slice(page*rows,(page*rows)+rows).map((user,index)=>{
        if(originalData.length > 0){
                    return (              
      <TableRow key={user._id}>
      <TableCell align="center">
       {index+1}
        </TableCell>
      <TableCell align="center">
        <Typography fontWeight={700}>
            <img width="50px" hight="50px" style={{borderRadius:"100%"}} src={photo} alt="profile"/>
            </Typography>
      </TableCell >
            <TableCell align="center" sx={{textDecoration:"unset"}}>{user.name}</TableCell>
      <TableCell align="center">{user.email}</TableCell>
       <TableCell align="center">{user.phone}</TableCell>
       <TableCell align='center'>
        <Checkbox  checked={user.isAccountActive} onChange={(e)=>handleChangeStatus(e,user)}/>
        </TableCell>
      <TableCell>
        <Button size='small' onClick={handleClick} disableRipple endIcon={<ArrowDropDownIcon/>} sx={{bgcolor:"#42A5F5 ",borderRadius:"50px",width:"100%"}} variant="contained" color="primary" >
        Action
      </Button>
      </TableCell>
      </TableRow>
        )}})}
    </TableBody>
    <TableFooter>
      <TableRow>
  <TablePagination  
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rows}
      onRowsPerPageChange={handleChangeRowsPerPage}
      count={originalData.length} variant="outlined" shape="rounded" />
      </TableRow>
    </TableFooter>
  </Table>
            {originalData.length < 1?<Typography align={"center"}>No data available in table</Typography>:"" }
</TableContainer>


     <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}} >
        <MenuItem onClick={handleClose}>View in website</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Mark as pending</MenuItem>
        <MenuItem onClick={handleClose}>Mark as featured</MenuItem>
      </Menu>
    </>

  );
  }
  else{
    return <Typography>Loading...</Typography>
  }
 
}