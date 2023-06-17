import Homepage from "./components/Home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stream from "./components/pages/Stream";
import Pricing from './components/pages/Pricing'
import Colleges from "./components/admin/pages/CollegetTabs/Colleges";
import HomepageAdmin from "./components/admin/HomepageAdmin";
import AddNewCollege from "./components/admin/pages/AddNewCollege";
import FilterColleges from './components/pages/FilterColleges'
import BlogPage from './components/pages/BlogPage'
import AddLocation from './components/admin/pages/AddLocation'
import IndividualCollegeInfo from "./components/pages/Featured Colleges/Mangalmay";
import BlogInnerPage from './components/pages/BlogInnerPage'
import StreamAdmin from "./components/admin/pages/Stream";
import Leadspage from "./components/admin/pages/Leadspage";
import AddNewStream from "./components/admin/pages/AddNewStream";
import ClaimedCollege from "./components/admin/pages/ClaimedCollege";
import Amenities from "./components/admin/pages/Amenities";
import AddNewAmenities from "./components/admin/pages/AddNewAmenities";
import LocationPageAdmin from "./components/admin/pages/LocationPageAdmin";
import AddNewUser from "./components/admin/pages/AddNewUser";
import AddNewBlog from "./components/admin/pages/AddNewBlog";
import ScrollToTopFab from "./components/Global/ScrollTop"
import ReportedCollege from "./components/admin/pages/ReportedCollege";
import PageSidebarAdmin from "./components/admin/pages/PageSidebarAdmin";
import Advertisement from "./components/admin/pages/Advertisment";
import BlogPost from "./components/admin/pages/BlogPost";
import AddNewPage from "./components/admin/pages/AddNewPage";
import AllPackages from "./components/admin/pages/AllPackages";
import AddNewPackage from "./components/admin/pages/AddNewPackage";
import MapSettings from "./components/admin/pages/MapSettings";
import Users from "./components/admin/pages/Users";
import AddAdvertisment from "./components/admin/pages/AddAdvertisment";
import OfflinePayment from "./components/admin/pages/OfflinePayment";
import FrontendSetting from "./components/admin/pages/FrontendSettings";
import PaymentSettings from './components/admin/pages/PaymentSettings'
import SmtpSetting from "./components/admin/pages/SMTPSettings";
import LanguageSettings from "./components/admin/pages/LanguageSettings";
import SettingsAbout from "./components/admin/pages/SettingsAbout";
import SystemSettings from "./components/admin/pages/SystemSettings";
import PaymentHistory from "./components/admin/pages/PaymentHistory";
import RatingWise from "./components/admin/pages/RatingWise";
import PrivateRoutes from "./PrivateRoutes";
import LogInPage from "./components/admin/pages/LogInPage";
import RegisterPage from "./components/admin/pages/RegisterPage";
import FilterStream from './components/pages/FilterStream'
import LocationStream from './components/pages/LocationStream'
import About from './components/Global/FooterPages.js/About'
import Faq from './components/Global/FooterPages.js/Faq'
import PrivacyPolicy from './components/Global/FooterPages.js/PrivacyPolicy'
import TermsAndConditions from './components/Global/FooterPages.js/TermsAndConditions'
import EditCollege from '../src/components/admin/pages/EditCollege/EditCollege'
import EditNewStream from "./components/admin/pages/EditStream/EditNewStream";
import LandingPage from "./LandingPage/Home/LandingPage";
import EditNewAmenity from "./components/admin/pages/EditAmenities/EditNewAmenity";
import EditNewBlog from "./components/admin/pages/EditBlog/EditNewBlog";
import EditNewLocation from "./components/admin/pages/EditLocation/EditNewLocation";
import EditNewUser from "./components/admin/pages/EditUser/EditNewUser";
import SearchColleges from "./components/pages/CollegeSearch";
function App() {
  return (
    <>
      <ScrollToTopFab />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/stream" element={<Stream />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path='/listings' element={<FilterColleges />} />
          <Route exact path='/filterStreams/:stream' element={<FilterStream />} />
          <Route exact path='/filterlocation/:location' element={<LocationStream />} />
          <Route exact path='/collegeSearched/:collegeName' element={<SearchColleges />} />
          <Route exact path='/posts' element={<BlogPage />} />
          <Route exact path='/footerabout' element={<About />} />
          <Route exact path='/footerfaq' element={<Faq />} />
          <Route exact path='/footerprivacy' element={<PrivacyPolicy />} />
          <Route exact path='/footertermsandcondition' element={<TermsAndConditions />} />
          <Route exact path='/home/posts/:vid' element={<BlogInnerPage />} />
          <Route exact path='/college/:id' element={<IndividualCollegeInfo />} />
          <Route exact path='/welcome' element={<LandingPage />} />
          <Route exact path='/admin/login' element={<LogInPage />} />
          <Route exact path='/admin/register' element={<RegisterPage />} />


          <Route element={<PrivateRoutes />}>
            <Route exact path='/admin' element={<HomepageAdmin />} />
            <Route exact path='/admin/allcolleges' element={<Colleges />} />
            <Route exact path='/admin/fo5n4ejplzppvs0y8d52u3bkuwvd0m6y57365a0tyub6p044fn7e6csupcqmwxq5ikuncw0bjrwbvltj0f9v2kdcijvvo2wlwqlh' element={<AddNewCollege />} />
            <Route exact path='/admin/claimedcollege' element={<ClaimedCollege />} />
            <Route exact path='/admin/reportedcollege' element={<ReportedCollege />} />
            <Route exact path='/admin/stream' element={<StreamAdmin />} />
            <Route exact path='/admin/addnewstream' element={<AddNewStream />} />
            <Route exact path='/admin/addnewlocation' element={<AddLocation />} />
            <Route exact path='/admin/location' element={<LocationPageAdmin />} />
            <Route exact path='/admin/addnewuser' element={<AddNewUser />} />
            <Route exact path='/admin/addnewpost' element={<AddNewBlog />} />
            <Route exact path='/admin/addnewpage' element={<AddNewPage />} />
            <Route exact path='/admin/advertisement' element={<Advertisement />} />
            <Route exact path='/admin/addadvertisement' element={<AddAdvertisment />} />
            <Route exact path='/admin/page' element={<PageSidebarAdmin />} />
            <Route exact path='/admin/post' element={<BlogPost />} />
            <Route exact path='/admin/amenities' element={<Amenities />} />
            <Route exact path='/admin/allpackages' element={<AllPackages />} />
            <Route exact path='/admin/editcollege/:id' element={<EditCollege />} />
            <Route exact path='/admin/editstream/:id' element={<EditNewStream />} />
            <Route exact path='/admin/editamenity/:id' element={<EditNewAmenity />} />
            <Route exact path='/admin/editblog/:id' element={<EditNewBlog />} />
            <Route exact path='/admin/editlocation/:id' element={<EditNewLocation />} />
            <Route exact path='/admin/edituser/:id' element={<EditNewUser />} />
            <Route exact path='/admin/users' element={<Users />} />
            <Route exact path='/admin/mapsettings' element={<MapSettings />} />
            <Route exact path='/admin/addnewamenity' element={<AddNewAmenities />} />
            <Route exact path='/admin/addnewpackage' element={<AddNewPackage />} />
            <Route exact path='/admin/frontendsettings' element={<FrontendSetting />} />
            <Route exact path='/admin/languagesettings' element={<LanguageSettings />} />
            <Route exact path='/admin/systemsettings' element={<SystemSettings />} />
            <Route exact path='/admin/paymenthistory' element={<PaymentHistory />} />
            <Route exact path='/admin/rating' element={<RatingWise />} />
            <Route exact path='/admin/paymentsettings' element={<PaymentSettings />} />
            <Route exact path='/admin/about' element={<SettingsAbout />} />
            <Route exact path='/admin/smtpsettings' element={<SmtpSetting />} />
            <Route exact path='/admin/leads' element={<Leadspage />} />
            <Route exact path='/admin/offlinepayment' element={<OfflinePayment />} />
          </Route>

        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;