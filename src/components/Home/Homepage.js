import Header from "../Global/Header"
import BannerArea from "./BannerArea"
import FeaturedColleges from "./FeaturedColleges"
import tag from '../assets/tag.jpg'
import tagMba from '../assets/tagmba.jpg'
import Infotag from "./Infotag"
import PopularStream from "./PopularStream"
import Location from "./Location"
import { Divider } from "@mui/material"
import Footer from "../Global/Footer"
import { useEffect, useState } from "react"
import ModalPage from "../Global/ModalPage"

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => {
    setOpen(true)
  }
  useEffect(() => {
    setTimeout(() => {
      handleOpen()
    }, 3000)
  }, [])
  return (
    <>
      <ModalPage open={open} setOpen={setOpen} />
      <Header isBgColor={false} handleOpen={handleOpen2} />
      <BannerArea />
      <Infotag pic={tag} />
      <PopularStream />
      <FeaturedColleges />
      <Location />
      <Infotag pic={tagMba} />
      <Divider sx={{ mt: "50px" }} />
      <Footer />
    </>
  )
}

export default Homepage