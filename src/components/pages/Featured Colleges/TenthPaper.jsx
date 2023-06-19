import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';


const TenthPaper = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12} m="10px 0px 10px 0px">
          <Typography fontSize="28px"><b>Reviews</b></Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box sx={{ bgcolor: "#32a067", p: "25px", mb: "10px", mr: "10px", borderRadius: "6px" }}>
            <Typography variant='h3' color="white" align='center' fontWeight="600">0.0</Typography>
            <Typography color="white" align='center'>Based on 0 Reviews</Typography>
          </Box>
        </Grid>
        <Grid item xs={9} sm={9} md={7} p="0px 20px 0px 0px">

          <Typography height="22px" sx={{ bgcolor: "#e9ecef", borderRadius: "8px" }}></Typography>
          <Typography height="22px" sx={{ bgcolor: "#e9ecef", mt: "10px", borderRadius: "8px" }}></Typography>
          <Typography height="22px" sx={{ bgcolor: "#e9ecef", mt: "10px", borderRadius: "8px" }}></Typography>
          <Typography height="22px" sx={{ bgcolor: "#e9ecef", mt: "10px", borderRadius: "8px" }}></Typography>
          <Typography height="22px" sx={{ bgcolor: "#e9ecef", mt: "10px", borderRadius: "8px" }}></Typography>
        </Grid>
        <Grid item xs={3} md={2} >
          <Typography >1 Stars</Typography>
          <Typography mt="10px">2 Stars</Typography>
          <Typography mt="8px">3 Stars</Typography>
          <Typography mt="8px">4 Stars</Typography>
          <Typography mt="8px">5 Stars</Typography>
        </Grid>
        <Grid container flexDirection={'column'} spacing={2}>
          <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button variant='contained' sx={{ bgcolor: "#ffc107", color: "black" }} >Login to Review</Button>

          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button variant='contained' sx={{ bgcolor: "#ffc107", color: "black" }}>claim This Listing</Button>

          </Grid>

        </Grid>

      </Grid>
    </>
  );
}

export default TenthPaper;
