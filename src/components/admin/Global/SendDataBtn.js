import { Button,Grid } from "@mui/material"

const SendDataBtn = (props) => {
  return (
        <Grid container sx={{justifyContent:"center",m:"10px",flexDirection:"column",justifyContent:"center",alignItems:"center"}} spacing={2} >
          {props.type === "Send" && <Grid item sx={{width:"50%"}}>
   <Button onClick={props.onClick} style={{cursor:props.disabled?'not-allowed':'pointer',width:"100%",color:"white"}} disabled={props.disabled} type="submit" disableElevation disableRipple  variant="contained" sx={{bgcolor:"green",fontSize:{xs:"13px",lg:"15px",md:"14px"},textTransform:"unset"}} size="small">{props.children}</Button>
          </Grid>}
          {props.type === "Next"&& <Grid item sx={{width:{xs:"80%",lg:"50%",md:"50%",sm:"50%"}}}>
     <Button sx={props.sx} onClick={props.onClick}  disabled={!props.disabled} size="small" style={{color:"white",width:"100%",textTransform:"unset"}} variant="contained">{props.children}</Button>
          </Grid>}
   </Grid>
  )
}

export default SendDataBtn