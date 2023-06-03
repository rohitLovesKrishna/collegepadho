import {Divider,Box,Drawer,List,ListItemButton, Collapse, Typography, IconButton, Button} from '@mui/material';
import { ExpandLess, ExpandMore} from '@mui/icons-material';
import logo from '../../assets/dark_logo.png'
import { sideItems,hoverMenu } from '../DataMenu/SidebarData';
import {useModal} from '../hooks/useModal' 
import '../AdminMaster.css'
import { useNavigate } from 'react-router-dom';

const drawerWidth = 280;

const SisebarAdmin = () => {
const navigate = useNavigate();
const {open,handleClick} = useModal()


  return (
   <Drawer classes={{paper:'paper'}}
        sx={{
          display:{xs:"none",lg:"block",md:"block"},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor:"#1e1e2d",
            color:"#a2a3b7 ",
          },
        }}
        variant="permanent"
      anchor="left">
                <Box sx={{display:"flex",p:"20px",alignItems:"center",justifyContent:"center"}}>
                <img width ="120px" height="30px" src={logo} alt="logo" />
              </Box>
        <Divider />
         <List>
             {sideItems.map((item,index) => (
             <div key={item.id}>
             <ListItemButton onClick={()=>{if(hoverMenu[index].length === 0){navigate(`/admin${item.path}`)};handleClick(item.title)}}>
                                   <IconButton >{item.logo}</IconButton>
                                   <Typography fontFamily="sans-serif" fontWeight={700} fontSize="12px" flexGrow={1}>{item.title}</Typography>
                                   {hoverMenu[index].length !== 0 ? open[item.title] ? <ExpandLess /> : <ExpandMore />: undefined}
             </ListItemButton>
    
                                   {hoverMenu[index].length !== 0 ?  <Collapse in={open[item.title]} timeout="auto" unmountOnExit>
                                   {hoverMenu[index].map((ele)=>{
                                     return (
                                                  <List key={ele.id} component="div" disablePadding>
             <ListItemButton onClick={()=>{localStorage.removeItem('STEP_3');localStorage.removeItem('STEP_2');localStorage.removeItem('COLLEGE_ID');navigate(`/admin${ele.path}`)}} sx={{ pl: 4 }}>
                                                         <div   style={{display:'flex'}}>
                                                        <Button  disableFocusRipple disableElevation disableRipple  sx={{color:"white",opacity:"0.4",fontSize:"10px",fontFamily:"sans-serif",'&:hover':{opacity:1}}} startIcon={ele.logo} id="menuItemTitle">{ele.title}</Button></div>
             </ListItemButton></List>)})}</Collapse> :undefined}</div>))}
    </List>

      </Drawer>
  )
}

export default SisebarAdmin