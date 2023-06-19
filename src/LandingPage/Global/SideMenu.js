import { Box, Divider, Drawer, Link, List, ListItem, Typography } from '@mui/material';
import '../../components/Home/Master.css'


export default function SideMenu({ state, setState }) {


  const ListBox = () => (
    <Box id="bigMenuBar" sx={{ width: "100%", height: "280vh", bgcolor: '#0B2755', color: "white" }} role="presentation">
      <Typography textAlign="center" color=" rgba(255,255,255,.4);">Menu</Typography>
      <Divider />
      <List>
        <ListItem sx={{ mb: "10px", cursor: "pointer" }}>
          <Link sx={{ '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", color: "white", mr: "20px", cursor: "pointer", textDecoration: "none" }}>Home</Link>
        </ListItem>
        <Divider />
        <ListItem sx={{ mb: "10px", cursor: "pointer" }}>
          <Link sx={{ '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", color: "white", mr: "20px", cursor: "pointer", textDecoration: "none" }}>Listings</Link>
        </ListItem>
        <Divider />
        <ListItem sx={{ mb: "10px", cursor: "pointer" }}>
          <Link sx={{ '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", color: "white", mr: "20px", cursor: "pointer", textDecoration: "none" }}>Stream</Link>
        </ListItem>
        <Divider />
        <ListItem sx={{ mb: "10px", cursor: "pointer" }}>
          <Link sx={{ '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", color: "white", mr: "20px", cursor: "pointer", textDecoration: "none" }}>Blog</Link>
        </ListItem>
        <Divider />
        <ListItem sx={{ mb: "10px", cursor: "pointer" }} >
          <Link sx={{ '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", color: "yellow", mr: "20px", cursor: "pointer", textDecoration: "none" }}>Admission Enquiry</Link>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer id="bigMenuBarMain" anchor={'left'} open={state} onClose={() => setState(false)}> <ListBox /></Drawer>
  )
}