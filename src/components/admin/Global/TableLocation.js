import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination,Button,Menu,MenuItem,Typography, TableFooter } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';


export default function TableLocation({rows,setRows,data}) {
  const [page, setPage] =useState(0);
  const handleChangePage = (_, newPage) => {setPage(newPage);};
  const handleChangeRowsPerPage = (event) => {setRows(event.target.value);setPage(0);};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {setAnchorEl(event.currentTarget);};
  const handleClose = () => {setAnchorEl(null);};

  return (
    <>
    <TableContainer  >
  <Table stickyHeader={true} responsive='true'>
    <TableHead>
      <TableRow>
        <TableCell><b>#</b></TableCell>
        <TableCell><b>Location name</b></TableCell>
  <TableCell><b>Country</b></TableCell>
      <TableCell><b>Option</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.slice(page*rows,(page*rows)+rows).map((location,index)=>{
        return (
      <TableRow key={location._id}>
      <TableCell>
        {index+1}
        </TableCell>
      <TableCell>
        <Typography fontWeight={700}>{location.locationName}</Typography>
      </TableCell>
      <TableCell>
        <Typography fontWeight={700}>{location.country}</Typography>
      </TableCell>
      <TableCell>
        <Button onClick={handleClick} disableRipple endIcon={<ArrowDropDownIcon/>} sx={{bgcolor:"#42A5F5 ",borderRadius:"50px",width:"100%"}} variant="contained" color="primary" >
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
  count={data.length} variant="outlined" shape="rounded" />
      </TableRow>
    </TableFooter>
        
  </Table>
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