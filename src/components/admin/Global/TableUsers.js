import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination, Box,Button,Checkbox,FormControlLabel,Menu,MenuItem,Typography, TableFooter } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';


export default function TableUsers({rows,setRows,dummyData}) {
  const [page, setPage] = useState(0);
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
        <TableCell><b>Photo</b></TableCell>
    <TableCell><b>Name</b></TableCell>
      <TableCell><b>Email</b></TableCell>
      <TableCell><b>Phone</b></TableCell>
      <TableCell><b>Social links</b></TableCell>
      <TableCell><b>Option</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dummyData.slice(page*rows,(page*rows)+rows).map((college)=>{
        if(dummyData.length > 0){
                    return (              
      <TableRow key={college.id}>
      <TableCell>
       {college.id}
        </TableCell>
      <TableCell>
        <Typography fontWeight={700}>
            <img width="50px" hight="50px" style={{borderRadius:"100%"}} src={college.photo} alt="profile"/>
            </Typography>
      </TableCell>
            <TableCell>{college.name}</TableCell>
      <TableCell>{college.email}</TableCell>
       <TableCell>{college.phone}</TableCell>
       <TableCell align='center'>
        <FacebookIcon fontSize='10px' sx={{mr:"10px"}}/>
        <TwitterIcon fontSize='10px'/><br/><LinkedInIcon fontSize='10px'/>
        </TableCell>
      <TableCell>
        <Button size='small' onClick={handleClick} disableRipple endIcon={<ArrowDropDownIcon/>} sx={{bgcolor:"#42A5F5 ",borderRadius:"50px",width:"100%"}} variant="contained" color="primary" >
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
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Mark as pending</MenuItem>
        <MenuItem onClick={handleClose}>Mark as featured</MenuItem>
      </Menu>
    </>

  );
}