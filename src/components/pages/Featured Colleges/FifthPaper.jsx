import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const Placement = ({ data }) => {
  if (data.length > 0) {
    return (
      <>
        <Paper elevation={3} sx={{ p: "10px" }}>
          <Box sx={{ m: "0px 0px 12px 0px" }}>
            <Typography fontSize="15px">
              <b>Placement info</b>
            </Typography>
          </Box>
          {data.map((item, i) => {
            return (
              <Grid container key={item + i}>
                <Typography variant="h6" mb="12px">
                  Course name: {item.course} (Batch {item.batch})
                </Typography>
                <Grid item container>
                  {item.numberOfCompaniesVisited != "N/A" && item.numberOfCompaniesVisited.trim().length > 0 ? <Grid item>
                    <Button disableRipple startIcon={<CheckBoxIcon />}>Total Companies Visited:&nbsp; <b style={{ color: 'green', fontWeight: 900 }}>{item.numberOfCompaniesVisited}</b></Button>
                  </Grid> : ""}

                  {item.maxSalary != "N/A" && item.maxSalary.trim().length > 0 ? <Grid item>
                    <Button disableRipple startIcon={<CheckBoxIcon />}>Maximum Salary Offered:&nbsp;  <b style={{ color: 'green', fontWeight: 900 }}>{item.maxSalary}</b></Button>
                  </Grid> : ""}

                  {item.numberOfStudentsPlaced != "N/A" && item.numberOfStudentsPlaced.trim().length > 0 ? <Grid item>
                    <Button disableRipple startIcon={<CheckBoxIcon />}>Total Students Placed:&nbsp;  <b style={{ color: 'green', fontWeight: 900 }}>{item.numberOfStudentsPlaced}</b></Button>
                  </Grid> : ""}

                  {item.minSalary != "N/A" && item.minSalary.trim().length > 0 ? <Grid item>
                    <Button disableRipple startIcon={<CheckBoxIcon />}>Minimum Salary Offered:&nbsp;  <b style={{ color: 'green', fontWeight: 900 }}>{item.minSalary}</b></Button>
                  </Grid> : ""}

                  {item.averageSalary != "N/A" && item.averageSalary.trim().length > 0 ? <Grid item>
                    <Button disableRipple startIcon={<CheckBoxIcon />}>Average Salary:&nbsp;  <b style={{ color: 'green', fontWeight: 900 }}>{item.averageSalary
                    }</b></Button>
                  </Grid> : ""}

                </Grid>
              </Grid>
            )
          })}

        </Paper>
      </>
    );
  }

};

export default Placement;
