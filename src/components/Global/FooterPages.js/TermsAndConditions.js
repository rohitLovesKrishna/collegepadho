import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import bca from '../../assets/Bca.jpg';
import tsc from '../../assets/tsc.svg';
import Infotag from '../../Home/Infotag';
import mba from '../../assets/mba.jpg'
import Footer from '../../Global/Footer';
import Header from '../../Global/Header';

const TermsAndCondition = () => {
  return (
    <>
    <Grid container>
      <Header isBgColor={true}/>
       
        <Grid item xs={12} sx={{backgroundColor:'#f2f4f8',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'10px', mt:{lg:'57px', md:'57px', sm:'59px' , xs:'47px'}}}>
            <Box sx={{width:{lg:'55%', md:'70%', sm:'90%', xs:'90%'}}}>
            <img src={bca} width='100%' height='100%'/>
            </Box>
            </Grid>
            <Grid item xs={12} sx={{backgroundColor:'#f2f4f8',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
                <Box sx={{width:'70px'}}>

                      <img  src={tsc} width='100%' height='100%'/>
                </Box>
            <Typography variant='h5' fontWeight={600}>Terms and conditions</Typography>

            </Grid>
            <Grid item container xs={12} sx={{ justifyContent:'center', alignItems:'center'}}>
                  <Grid item lg={8.5} md={10} sm={10} xs={10}sx={{marginTop:'70px'}}>
              <Typography variant='h5' fontWeight={600}>Welcome to College Padho!</Typography>
            </Grid>
                <Grid item lg={8.5} md={10}  sm={10} xs={10} sx={{ mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}> <p>These terms and conditions outline the rules and regulations for the use of College Padho's Website, located at www.collegepadho.com.</p> 
                  <p>By accessing this website we suppose you accept these terms and conditions. Do not continue to use CollegePadho if you do not agree to take all of the terms and conditions stated on this page.</p>
                  <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment essential to undertake the procedure of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Customer’s requirements in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any utilization of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p></Typography>
                </Grid>
                  <Grid item lg={8.5} md={10} sm={10} xs={10}sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>Cookies</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555'}}><p>We employ the use of cookies. By accessing College Padho, you agreed to use cookies in agreement with the College Padho's Privacy Policy.</p>
                  <p>Most interactive websites use cookies to let us retrieve the user’s details for every visit. Cookies are used by our website to allow the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may well also use cookies.</p>
                  </Typography>
                </Grid>

                <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> License</Typography>
            </Grid>
                
                  <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555'}}>Unless otherwise stated, College Padho and/or its licensors own the intellectual property rights for all material on College Padho. All intellectual property rights are reserved. You may access this from College Padho for your own personal use subjected to restrictions set in these terms and conditions.</Typography>
                </Grid>

                 <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>You must not:</Typography>
            </Grid>
               
                <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{ mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555'}}><p>Republish material from College PadhoSell, rent or sub-license material from College Padho Reproduce, duplicate or copy material from College Padho Redistribute content from College Padho This Agreement shall begin on the date hereof.</p>
                  <p>Parts of this website offer an chance for users to post and exchange opinions and information in few areas of the website. College Padho does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of College Padho,its agents and/or affiliates. Comments reflect the views and opinions of the individual who post their views and opinions. To the extent permitted by applicable laws, College Padho shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website(www.collegepadho.com).</p>
                  <p>College Padho reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
 </Typography>
                </Grid>

                   <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> You warrant and represent that:</Typography>
            </Grid>

            <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{ mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>You are entitled to post the Comments on our website (collegepadho.com) and have all essential licenses and consents to do so; The Comments do not invade any intellectual property right, including without limitation copyright, copyright or trademark of any 3rd party.</p>
                  <p>The Comments do not contain any offensive, libellous, offensive, indecent or otherwise unlawful material which is an invasion of privacy.</p>
                  <p>The Comments will not be used to ask for or promote business or custom or present commercial activities or illegal activity.</p>
                  <p>You hereby grant CollegePadho a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and every forms, formats or media.</p>
                  </Typography>
                </Grid>

                 <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>  Hyper linking to our Content</Typography>
            </Grid>

            <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{ mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>The following organizations might link to our Website without prior written approval: Government agencies; Search engines; News organizations;</p>
                  <p>Online directory distributors might link to our Website in the same way as they hyperlink to the Websites of other listed businesses and System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, & charity fundraising groups which could not hyperlink to our Web site.</p>
                  <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any manner deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits in the context of the linking party’s site.</p>
                  <p>We might consider and approve other link requests from the following kinds of organizations:commonly-known consumer and/or business information sources;</p>
                  <p>dot.com community sites;associations or other groups representing charities;online directory distributors;internet portals;</p>
                  <p>accounting, law and consulting firms; and educational institutions and trade associations.</p>
                  <p>We will approve link requests from these organizations if we choose that: (a) the link would not make us look unfavourably to ourselves or to our accredited businesses; (b) the organization does not have any harmful records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of CollegePadho and (d) the link is in the context of general resource information.</p>
                  <p>These organizations might link to our home page so long as the link: (a) is not in any way illusory; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits in the context of the linking party’s site.</p>
                  <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you have to inform us by sending an e-mail to CollegePadho. Please include your name, your association name, contact info as well as the URL of your site, a list of any URLs from which you want to link to our website (collegepadho.com), and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a reply.</p>
                  </Typography>
                </Grid>

                 <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Approved organizations may hyperlink to our website as follows:</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>By use of our corporate name; or By use of the uniform resource locator being linked to; or</p>
                  <p>By use of any other description of our Website (Collegepadho.com) being linked to that makes sense in the context and format of content on the linking party’s site</p>
                  <p>No use of CollegePadho's logo or other artwork will be allowed for linking not present a trademark license agreement.</p>
                  </Typography>
                </Grid>

                   <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>iFrames</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>Without prior approval and written permission, you could not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p></Typography>
                </Grid>

                   <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Content Liability</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>We will not be hold responsible for any type of content that appears on your website. You agree to protect and guard us against all claims that is rising on your Website. No link(s) must appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any 3rd party rights.</p></Typography>
                </Grid>

                   <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>  Your Privacy</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}>Please read Privacy Policy Reservation of Rights
                  <p>We reserve the right to request that you remove all links or any particular link to our website. You approve to instantly remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any moment. By continuously linking to our website, you agree to be bound to and follow these linking terms & conditions.</p>
                  </Typography>
                </Grid>

                      <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>Removal of links from our website</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>If you find any link on our Website that is offensive for any reason, you are free to contact us and inform us any time. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                  <p>We do not ensure that the information on this website is right, we do not warrant its completeness or accuracy; nor do we promise to confirm that the website remains available or that the material on the website is kept up to date.</p>
                  </Typography>
                </Grid>


                            <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Disclaimer</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555'}}><p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                  <p>limit or exclude our or your responsibility for death or personal injury;limit or exclude our or your responsibility for fraud or fraudulent misrepresentation;</p>
                  <p>limit any of our or your liabilities in any way that is not permitted under applicable law; or</p>
                  <p>exclude any of our or your liabilities that may not be excluded under applicable law.</p>
                  <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                  <p>As long as the website and the information and services on the website are providing free of cost, we will not be liable for any loss or damage of any nature.</p>
                  </Typography>
                </Grid>

                           <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Privacy Policy for COLLEGE PADHO</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}><p>At COLLEGE PADHO, accessible from www.collegepadho.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by COLLEGE PADHO and how we use it.</p>
                  <p>If you have extra questions or want more information about our Privacy Policy, do not hesitate to contact us any moment.</p>
                  <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in COLLEGE PADHO. This policy is not valid to any information collected offline or through channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.</p>
                  </Typography>
                </Grid>

                           <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Consent</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>By using our website, you hereby permission to our Privacy Policy and agree to its terms.</p>
                  </Typography>
                </Grid>

                           <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Information we collect</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}><p>The personal information that you are asked to give, and the reasons why you are asked to give it, will be made clear to you at the point we ask you to provide your private details.</p>
                  <p>If you contact us directly, we can receive extra information about you such as your name, email address, phone number, the contents of the message and/or attachments you could send us, and any other information you might choose to provide.</p>
                  <p>When you register for an Account, we might ask for your contact information, including items such as name, address, company name, , email address and telephone number.</p>
                  <p>How we use your information We use the information we collect in various modes, including to:Provide, operate, and maintain our website</p>
                  <p>Improve, personalize, and expand our website Understand and analyze how you use our websit Develop new products, services, features, and functionality.</p>
                  <p>Communicate with you, either straight or through one of our partners, including for consumer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</p>
                  <p>Send you emails Find and prevent fraud Log Files</p>
                  <p>COLLEGE PADHO follows a standard process of using log files. These files log visitors when they visit our websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files contain internet protocol (IP) addresses, Internet Service Provider (ISP), date and time stamp, referring/exit pages, browser type and possibly the number of clicks. These are not linked to any information that is separately identifiable. The reason of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic details.</p>
                  </Typography>
                </Grid>
                
                           <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Cookies and Web Beacons</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px', color:'#555'}}><p>Like any other website, COLLEGE PADHO uses 'cookies'. These cookies are used to store info including visitors' preferences, and pages on the website that the visitor accessed or visited. The information is utilized to optimize the users' experience by customizing our web page content based on visitors' browser type and/or supplementary informatio</p>
                  <p>For more general information on cookies, please read the Cookies article on produce Privacy Policy website.</p>
                  </Typography>
                </Grid>
                
                           <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Advertising Partners Privacy Policies</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}><p>You may consult this list to find the Privacy Policy for each of the advertising partners of COLLEGE PADHO.</p>
                  <p>3rd-party ad servers or ad networks uses technologies like JavaScript, cookies, or Web Beacons that are used in their respective advertisements and links that appear on COLLEGE PADHO, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the efficiency of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                  <p>Note that COLLEGE PADHO has no access to or control over these cookies that are used by third-party advertisers.</p>
                  </Typography>
                </Grid>

                   <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}> Third Party Privacy Policies
 </Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}><p>COLLEGE PADHO's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to ask the respective Privacy Policies of these 3rd-party ad servers for additional detailed information. It might include their practices and instructions about how to opt-out of assured options.</p>
                  <p>You can pick to disable cookies through your individual browser options. To know more detailed information about cookie management with exact web browsers, it may be found at the browsers' respective websites</p>
                  </Typography>
                </Grid>

                   <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>CCPA Privacy Rights (Do Not Sell My Personal Information)</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}><p>Under the CCPA, among other rights, Indian consumers have the right to:</p>
                  <p>Request that a business that collects a user's personal data reveal the categories and specific pieces of personal data that a business has collected about users.</p>
                  <p>Request that a business delete any private data about the consumer that a business has collected.</p>
                  <p>Request that a business that sells a customer's private information, not sell the consumer's personal data.</p>
                  <p>If you make a request, we have 1 month to respond to you. If you would like to use any of these rights, please contact us.</p>
                  </Typography>
                </Grid>


                  <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>GDPR Data Protection Rights</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}><p>We would like to make sure you are totally aware of all of your data protection rights. Each user is entitled to the following:</p>
                  <p>The right to access:  You have the rights to request copies of your personal data. We can charge you a small fees for this service.</p>
                  <p>The right to rectification:  You have the rights to request that we correct any information you believe is incorrect. Furthermore You have the right to request that we complete the information you think is incomplete.</p>
                  <p>The right to erasure: You have the right to request that we remove your personal data, under some conditions.</p>
                  <p>The right to restrict processing:  You have the right to request that we restrict the processing of your personal data, under few conditions.</p>
                  <p>The right to object to processing: You have the right to object to our processing of your personal data, under few conditions.</p>
                  <p>The right to data portability: You have the right to request that we transfer the data that we have composed to another organization, or directly to you, under certain conditions.</p>
                  <p>If you make a request, we have one month to respond to you. If you would like to use any of these rights, please contact us.</p>
                  </Typography>
                </Grid>
                    
                    <Grid item lg={8.5} md={10} sm={10} xs={10} sx={{marginTop:'20px'}}>
              <Typography variant='h5' fontWeight={600}>Children's Information</Typography>
            </Grid>

             <Grid item lg={8.5} md={10} sm={10} xs={10}  sx={{mt:'20px'}}>
                  <Typography sx={{fontSize:'14px',color:'#555' }}><p>Another part of our main concern is adding protection for children while using the internet. We support parents and guardians to observe, participate in, and/or watch and guide their online activity.</p>
                  <p>COLLEGE PADHO does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this type of information on our website, we strongly encourage you to contact us immediately and we will do our top efforts to promptly remove such information from our records.</p>

                  <p>If you have any questions regarding this privacy policy or the protection of your personal data, please contact<span style={{fontWeight:'600'}}> CollegePadho Mayur Vihar, New Delhi</span></p>
                   <p style={{fontWeight:'600'}}> Email: info@collegepadho.com </p>
                  </Typography>
                </Grid>

                 <Grid item xs={12} padding='10px' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                   <Infotag  pic={mba} width='18rem'/> 
            </Grid>

             <Footer/>







            </Grid>
          
         
       

    </Grid>
    </>
  )
}

export default TermsAndCondition