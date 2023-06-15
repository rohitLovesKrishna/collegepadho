import React, { useState } from 'react';
import { Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './mainStyle.css'
import BASE_URL from '../../constant';

const PhotoGallery = ({ data }) => {
  const [im, setImage] = useState(false)
  if (data.length > 1) {
    return (
      <>
        <Paper elevation={3} sx={{ p: "10px" }}>
          <Grid container spacing={2.5} p="12px">
            <Grid item xs={12} ml="-10px">
              <Typography variant='h4'>Photo gallery</Typography>
            </Grid>
            {data.slice(0, 3).map((item, i) => {
              return <Grid key={item + i} item xs={12} md={6} lg={4} position="relative" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className='hoverImg' style={{ height: "170px", width: "100%" }}>
                  <img src={`${BASE_URL}` + item.image} alt='pic' height="100%" width="100%" />
                  <IconButton className='overLay' sx={{ position: "absolute", left: "90px", top: "47px" }}>
                    <ControlPointIcon sx={{ fontSize: "2.9rem", color: "orange" }} />
                  </IconButton>
                </div>
              </Grid>
            })}
            {data.slice(3).map((item, i) => {
              if (im) {
                return <Grid key={item + i} item xs={12} md={6} lg={4} position="relative" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className='hoverImg' style={{ height: "170px", width: "100%" }}>
                    <img src={`${BASE_URL}` + item.image} alt='pic' height="100%" width="100%" />
                    <IconButton className='overLay' sx={{ position: "absolute", left: "90px", top: "47px" }}>
                      <ControlPointIcon sx={{ fontSize: "2.9rem", color: "orange" }} />
                    </IconButton>
                  </div>
                </Grid>
              } else { return "" }
            })}
          </Grid>
          <Grid item justifyContent='center' alignItems='center' display='flex'>
            <Button onClick={() => { setImage(prev => { return !prev }) }} variant='contained' size='small'>{!im ? 'See more' : 'See less'}</Button>
          </Grid>
        </Paper>
      </>
    );
  }

}

export default PhotoGallery;

