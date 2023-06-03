import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { Doughnut } from "react-chartjs-2";
// import { Bar } from "react-chartjs-2";
import {Bar} from 'react-chartjs-2'
import { chart } from "chart.js/auto";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import { useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState({
    lables: ["red", "green"],
    datasets: [
      {
        label: "colors",
        data: [99, 1],
        backgroundColor: ["#42a5f5", "#3d5afe"],
        borderColor: ["white"],
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <Grid
        container
        sx={{backgroundColor: "#f2f4f8 " }}
      >
        <Grid
          item
          container
           xs={12} sm={12} md={12} lg={7}
          sx={{
           
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Grid
            item
            xs={12} sm={12} md={12} lg={5.2}
            sx={{  borderRadius: "7px", ml: "4px" }}
          >
            <Paper>
              <Box
                sx={{
                  backgroundColor: "#282a3c",
                  display: "flex",
                  padding: "8px",
                }}
              >
                <DonutSmallIcon sx={{ color: "white" }} />
                <Typography
                  sx={{ color: "white", ml: "5px", fontSize: "15px" }}
                >
                  Overview
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "#282a3",
                  padding: "15px 0px 15px 0px",
                }}
              >
                <Typography id='upperText' sx={{ fontSize: "15px" }}>
                  TOTAL COLLEGES = 413
                </Typography>
                <Typography id='upperText' sx={{ fontSize: "15px" }}>
                  TOTAL COURSES = 117
                </Typography>
                <Typography id='upperText' sx={{ fontSize: "15px" }}>
                  TOTAL USERS = 11
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}  sm={12} md={12 } lg={5.2}  id='upperBox' sx={{marginTop:{xs:'15px', sx:'15px', md:'15px' , lg:'0px', }}}>
            <Paper>
              <Box
                sx={{
                  backgroundColor: "#282a3c",
                  display: "flex",
                  padding: "8px",
                }}
              >
                <DonutSmallIcon sx={{ color: "white" }} />
                <Typography
                  sx={{ color: "white", ml: "5px", fontSize: "15px" }}
                >
                  Listing overview
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width:'170px',
                    height:'160px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  <Doughnut data={data} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#42a5f5",
                    borderRadius: "2px",
                    mr: "10px",
                  }}
                ></Box>
                <Typography fontWeight={400} sx={{ mr: "20px" }}>
                  Active listing
                </Typography>
                <Typography fontWeight={400}>99 %</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "10px",
                  paddingBottom: "5px",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#42a5f5",
                    borderRadius: "2px",
                    mr: "10px",
                  }}
                ></Box>
                <Typography fontWeight={400} sx={{ mr: "20px" }}>
                  Pending listing
                </Typography>
                <Typography fontWeight={400}>1%</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid item container id='secondBox'  xs={12} sx={{ padding:'12px'}}>
        <Grid item xs={12} sm={12} md={12} lg={6.94} >
          <Paper elevation={2}>
            <Box >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  backgroundColor: "#282a3c",
                  padding: "8px",
                }}
              >
                Package expiration : May
              </Typography>
              <Typography sx={{ backgroundColor: "white", padding: "8px" }}>
                No package found
              </Typography>
            </Box>
          </Paper>
        </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: "20px", padding: "12px" }}>
          <Box
            sx={{ backgroundColor: "#282a3c", display: "flex", padding: "8px" }}
          >
            <DonutSmallIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white", ml: "5px", fontSize: "15px" }}>
              {" "}
              Income overview this year (INR)
            </Typography>
          </Box>
          <Box sx={{ backgroundColor:'white' , height:'450px'}}>
           <Bar 
           data={{
            labels :["January", " February", "March" , "April" , "May", "June"," July,", "August" , "September" , "October", "November", "December"],
              datasets:[{
                label:'Monthly Income',
                data:[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 0.02, 0.02],
                backgroundColor:['#64b5f6'], 
                borderColor:[ 'rgb(75, 192, 192)',], 
                borderWidth:2,
                borderRadius:100
              }]

           }}
           height={100}
           width={600}
           options={{
            maintainAspectRatio: false,
            scales:{
              yAxes:[
                {
                  ticks:{
                    beginAtZero: true,
                  }
                }
              ]
            }
           }}
           />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
