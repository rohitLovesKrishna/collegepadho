import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination,Button,Menu,MenuItem,Typography, TableFooter } from '@mui/material';
import { IconPickerItem } from 'react-fa-icon-picker'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function TableAmenity({rows,setRows,amenitiesData}) {
  const [page, setPage] =useState(0);
  const navigate =useNavigate();
  const [actionOn,setActionOn]= useState(null);
  const handleChangePage = (_, newPage) => {setPage(newPage);};
  const handleChangeRowsPerPage = (event) => {setRows(event.target.value);setPage(0);};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event,id) => {setAnchorEl(event.currentTarget);setActionOn(id)};
  const handleClose = () => {setAnchorEl(null);};

  return (
    <>
    <TableContainer  >
  <Table stickyHeader={true} responsive='true'>
    <TableHead>
      <TableRow>
        <TableCell><b>#</b></TableCell>
        <TableCell><b>Icon</b></TableCell>
  <TableCell><b>Amenity name</b></TableCell>
      <TableCell><b>Option</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {amenitiesData.slice(page*rows,(page*rows)+rows).map((amenity,index)=>{
        return (
      <TableRow key={amenity._id}>
      <TableCell>
        {index+1}
        </TableCell>
      <TableCell>
       <IconPickerItem icon={amenity.icon} size={24} color="#000" />
      </TableCell>
      <TableCell>
        <Typography fontWeight={700}>{amenity.amenity}</Typography>
      </TableCell>
      <TableCell>
        <Button onClick={(e,id)=>handleClick(e,amenity._id)} disableRipple endIcon={<ArrowDropDownIcon/>} sx={{bgcolor:"#42A5F5 ",borderRadius:"50px",width:"50%"}} variant="contained" color="primary" >
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
  count={amenitiesData.length} variant="outlined" shape="rounded" />
      </TableRow>
    </TableFooter>
        
  </Table>
</TableContainer>


     <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}} >
        <MenuItem onClick={handleClose}>View in website</MenuItem>
        <MenuItem onClick={()=>navigate(`/admin/editamenity/${actionOn}`)}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Mark as pending</MenuItem>
        <MenuItem onClick={handleClose}>Mark as featured</MenuItem>
      </Menu>
    </>

  );
}