import Header from '../../Global/Header'
import Infotag from "../../Home/Infotag"
import tagMba from '../../assets/tagmba.jpg'
import Footer from "../../Global/Footer"
import BarLine from '../../Global/BarLine'
import tag from '../../assets/tag.jpg'
import {AppBar,Toolbar,Box,Typography,Divider, Grid} from '@mui/material'
import privacy from '../../assets/privacy-policy.svg'

const PrivacyPolicy = () => {
  return (
  <>
  <Header isBgColor={true}/>

  <Box sx={{mb:"90px",bgcolor:"#f8f8f8", display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'10px', mt:{lg:"55px", md:'55px', sm:'55px ', xs:'43px'}}}>
  <Infotag pic={tag} />
  <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",p:"15px",}}>
    <img src={privacy} height="70rem" />
    <Typography variant='h4'><b>Privacy policy</b></Typography>
  </Box>
  </Box>


  <Grid container sx={{p:"40px",color:"#555"}} spacing={3}>
    <Grid item xs={12}>
        <Typography >At COLLEGE PADHO, accessible from www.collegepadho.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by COLLEGE PADHO and how we use it.</Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in COLLEGE PADHO. This policy is not valid to any information collected offline or through channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>Consent</b></Typography>
        <Typography>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>Information we collect</b></Typography>
        <Typography>The personal information that you are asked to give, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal details.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>When you register for an Account, we might ask for your contact information, including items such as name, address, company name, , email address and telephone number.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>How we use your information</b></Typography>
        <Typography>The personal information that you are asked to give, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal details.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>When you register for an Account, we might ask for your contact information, including items such as name, address, company name, , email address and telephone number.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>How we use your information</b></Typography>
        <Typography>We use the information we collect in various ways, including to:</Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography>Provide, operate, and maintain our website Improve, personalize, and expand our website</Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography>Understand and analyze how you use our website</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>Develop new products, services, features, and functionality</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</Typography>
    </Grid>


    <Grid item xs={12}>
        <Typography>Send you emails Find and prevent fraud Log Files</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>COLLEGE PADHO follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files contain internet protocol (IP) addresses, Internet Service Provider (ISP), date and time stamp, browser type, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The reason of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic details.</Typography>
    </Grid>


    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>Cookies and Web Beacons</b></Typography>
        <Typography>Like any other website, COLLEGE PADHO uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or additional information.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>For more general information on cookies, please read the Cookies article on Generate Privacy Policy website.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>Advertising Partners Privacy Policies</b></Typography>
        <Typography>You may consult this list to find the Privacy Policy for each of the advertising partners of COLLEGE PADHO.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on COLLEGE PADHO, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>Note that COLLEGE PADHO has no access to or control over these cookies that are used by third-party advertisers.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>Third Party Privacy Policies</b></Typography>
        <Typography>COLLEGE PADHO's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>CCPA Privacy Rights (Do Not Sell My Personal Information)</b></Typography>
        <Typography>Under the CCPA, among other rights, California consumers have the right to:</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>Request that a business delete any personal data about the consumer that a business has collected.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>Request that a business that sells a customer's private data, not sell the consumer's personal data.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>GDPR Data Protection Rights</b></Typography>
        <Typography>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>The right to access – You have the right to request copies of your personal data. We might charge you a small fee for this service.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is unfinished..</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>The right to erasure – You have the right to request that we erase your private data, under certain conditions.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under few conditions.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>The right to object to processing – You have the right to object to our processing of your personal data, under few conditions.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions..</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5' sx={{color:"#333"}}><b>Children's Information</b></Typography>
        <Typography>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>COLLEGE PADHO does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this type of information on our website, we strongly encourage you to contact us right away and we will do our best efforts to promptly remove such information from our records.</Typography>
    </Grid>

    <Grid item xs={12}>
        <Typography>If you have any questions regarding this privacy policy or the protection of your personal data, please contact</Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography><b>CollegePadho Mayur Vihar, New Delhi Email: info@collegepadho.com</b></Typography>
    </Grid>





  </Grid>
      
    
{/* data area */}

    <Box sx={{mb:"10px",mt:"10px", display:'flex', justifyContent:'center', alignItems:'center'}}>
<Infotag pic={tagMba}/>
    </Box>
    <Divider/>
<Footer/>
  </>
  )
}

export default PrivacyPolicy