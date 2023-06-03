import { IconButton } from '@mui/material'
import '../Global/BannerSrc.css'
import { Search } from '@mui/icons-material'

const BannerSrc = () => {
  return (
    <>
       <div id="gradient"></div>
<form className="searchbox" >
        <input type="search" placeholder="Search" />
          <IconButton color="primary" aria-label="search"  sx={{transition:"all 0.50s ease",position:'absolute',right:'2%',bgcolor:"#ff9800",color:'white','&:hover':{bgcolor:'#ff9800',scale:"1.5"}}}>
        <Search />
      </IconButton>
    </form>
    </>
  
  )
}

export default BannerSrc