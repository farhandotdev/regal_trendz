import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
       {/* <div className="footer-container1">
        <h2> Thanks for visiting my Website </h2>
        <button>Back to Home</button>

       </div> */}

       <div className="footer-elementbox">
         <div className="footer-content1">
           <h1>Logo</h1>
          </div>
          <div className="footer-content2">
             <h2>Supports</h2>
             <div className="footer-element">About Us</div>
             <div className="footer-element">Term & Conditions</div>
             <div className="footer-element">Privacy Policy</div>
             <div className="footer-element"></div>
          </div>
          <div className="footer-content3">
             <h2>Contact Us</h2>
             <div className="footer-element"> 
            Jagatpura Jaipur Rajasthan <br />Jaipur pincode 302017</div>
             <div className="footer-element"> +91 96845 00456</div>
             <div className="footer-element">SurendraMehra321@gmail.com</div>
             <div className="footer-element">www.regaltrendz.com</div>
          </div>
          <div className="footer-content4">
             <h2>Social Link</h2>
             <div className="socialicon"> 
             <div className="footer-element"><h2><TwitterIcon/></h2></div>
             <div className="footer-element"><h2><FacebookIcon/></h2></div>
             </div>
             <div className="socialicon">
             <div className="footer-element"><h2><InstagramIcon/>  </h2></div>
            </div>
             <div className="socialicon">
             <div className="footer-element"><h2><LinkedInIcon/></h2></div>
             <div className="footer-element"><h2><TelegramIcon/> </h2></div>    
             </div>
             
          </div>
       </div>
    </div>
 </footer>
  )
}

export default Footer
