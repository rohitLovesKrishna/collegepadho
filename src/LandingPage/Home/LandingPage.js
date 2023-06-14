import Header from "../Global/Header"
import BannerArea from "./BannerArea"
import FeaturedColleges from "./FeaturedColleges"
import tag from '../../components/assets/tag.jpg'
import tagMba from '../../components/assets/tagmba.jpg'
import Infotag from "../../components/Home/Infotag"
import PopularStream from "./PopularStream"
import Location from "./Location"
import { Divider} from "@mui/material"
import Footer from "../Global/Footer"


const LandingPage = () => {

  return (
   <>
<Header isBgColor={false} />
<BannerArea/>
<Infotag pic={tag}/>
<PopularStream/>
<FeaturedColleges/>
<Location/>
<Infotag pic={tagMba}/>
<Divider sx={{mt:"50px"}}/>
<Footer/>
   </>
  )
}

export default LandingPage