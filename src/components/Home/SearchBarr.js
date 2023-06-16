import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { InputAdornment } from '@mui/material';
import '../Home/Master.css'
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBarr() {
  const navigate = useNavigate();
  const [data, setData] = useState("")


  return (
    <form onSubmit={(e) => { e.preventDefault(); if (data.length > 0) { navigate(`/collegeSearched/${data}`) } }} noValidate autoComplete="off" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Grid container style={{ height: "fit-content", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <Grid item>
          <TextField onChange={(e) => setData(e.target.value)} value={data} InputProps={{ disableUnderline: true, endAdornment: (<InputAdornment position='end'><Search onClick={(e) => { e.preventDefault(); if (data.length > 0) { navigate(`/collegeSearched/${data}`) } }} /></InputAdornment>) }} sx={{ border: "none", p: "11.2px", borderRadius: "40px", bgcolor: "white" }} fullWidth focused={false} type='text' id="searchInput" placeholder="Search..." variant="standard" />
        </Grid>

      </Grid>
    </form>
  );
}