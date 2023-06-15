import React from 'react';
import { Button, Grid, Typography, Paper } from '@mui/material';
import { IconPickerItem } from 'react-fa-icon-picker'


const AmenitiesSection = ({ data }) => {
  if (data.length > 0) {
    return (
      <>
        <Paper elevation={3}>
          <Grid container p="12px" >
            {data.length === 0 ? <Grid item xs={12} mb="8px">
              <Typography fontSize="18px"><b>Amenities</b></Typography>
            </Grid> : ""}

            <Grid item container xs={12} sm={12} md={12} lg={12} justifyContent={'center'} alignItems={'center'} width={'100%'}>
              {data[0].amenities.map((item, index) => {
                return (<Grid key={item + index} item lg={6} md={6} sm={12} xs={12}>
                  <Button startIcon={<IconPickerItem icon={item.icon} size={24} color="#000" />}>{item.amenity}</Button>
                </Grid>)
              })}
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }

}

export default AmenitiesSection;
