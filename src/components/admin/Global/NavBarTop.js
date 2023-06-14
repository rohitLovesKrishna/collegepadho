import {useState} from 'react';
import {Box,Drawer,List,ListItemButton, Collapse, Typography, IconButton, Button} from '@mui/material';
import { sideItems,hoverMenu } from '../DataMenu/SidebarData';
import { ExpandLess, ExpandMore,Menu} from '@mui/icons-material';
import {useModal} from '../hooks/useModal' 
import logo from '../../assets/dark_logo.png'
import { useNavigate } from 'react-router-dom';

export default function NavBarTop() {
  const [state, setState] = useState({top: false});
  const navigate = useNavigate();
const {open,handleClick} = useModal()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box sx={{ width:  '100%',height:'30rem' }} role="presentation" >
    <Box sx={{display:"flex",p:"20px",alignItems:"center",justifyContent:"center",width:"100%"}}>
        <Box sx={{display:"flex",flexGrow:1,justifyContent:"center"}}>
    <img width ="120px" height="30px" src={logo} alt="logo" />
        </Box>
     <Button sx={{color:"white"}} onClick={toggleDrawer('top', false)}><Menu sx={{fontSize:"30px"}}/></Button>
    </Box>
       <List>
             {sideItems.map((item,index) => (
             <div key={item.id}>
             <ListItemButton onClick={()=>{if(hoverMenu[index].length === 0){navigate(`/admin${item.path}`)};handleClick(item.title)}}>
                                   <IconButton >{item.logo}</IconButton>
                                   <Typography  fontFamily="sans-serif" fontWeight={700} fontSize="12px" flexGrow={1}>{item.title}</Typography>
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
    </Box>
  );

  return (
    <div>
          <Button sx={{color:"white"}} onClick={toggleDrawer('top', true)}><Menu sx={{fontSize:"30px"}}/></Button>
          <Drawer 
          disableScrollLock={true}
          BackdropProps={{invisible:true}}
            sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            bgcolor:"#1e1e2d",
            color:"#a2a3b7 ",
          },
        }}
            anchor="top"
            open={state['top']}
            onClose={toggleDrawer('top', false)}
          >
            {list('top')}
          </Drawer>
    </div>
  );
}