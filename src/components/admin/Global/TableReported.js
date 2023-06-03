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


export default function TableReported({rows,setRows,dummyData}) {
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
        <TableCell><b>Title</b></TableCell>
  <TableCell><b>Reported by</b></TableCell>
    <TableCell><b>Reason</b></TableCell>
    <TableCell><b>Status</b></TableCell>
      <TableCell><b>Option</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dummyData.slice(page*rows,(page*rows)+rows).map((college)=>{
        if(dummyData.length > 0){
                    return (              
      <TableRow key={college.id}>
      <TableCell>
         <FormControlLabel control={<Checkbox />} label={college.id} />
        </TableCell>
      <TableCell>
        <Typography fontWeight={700}>{college.title}</Typography>
        <Typography fontSize="12px">College Padho</Typography>
        <Typography fontSize="12px">{college.date}</Typography>
      </TableCell>
      <TableCell>
        {college.cat.map((item)=>{
          return (
      <Box key={item}  sx={{mb:"1px",display:"flex",justifyContent:"center",bgcolor:"#999999",borderRadius:"50px",color:"white"}}>{item}</Box>
          )
        })}
        </TableCell>
      <TableCell>{college.location}</TableCell>
      <TableCell>{college.status?<LensIcon  sx={{color:"green"}}/>:<LensIcon  sx={{color:"gray"}}/>}</TableCell>
      <TableCell>
        <Button onClick={handleClick} disableRipple endIcon={<ArrowDropDownIcon/>} sx={{bgcolor:"#42A5F5 ",borderRadius:"50px",width:"100%"}} variant="contained" color="primary" >
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