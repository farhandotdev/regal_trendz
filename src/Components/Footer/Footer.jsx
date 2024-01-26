import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_logo">
          <h1>RegalTrendZ</h1>
        </div>
        <div className="footer_support">
          <h2>Supports</h2>
          <p>About</p>
          <p>Term & Conditions</p>
          <p>Privacy Policy</p>
          <p>Our Stores</p>
        </div>
        <div className="footer_support">
          <h2>Shop By</h2>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <p>Home</p>
          </Link>
        </div>
        <div className="footer_contact">
          <h2>Contact Us</h2>
          <p>
            <span>Address: </span>Jagatpura Jaipur Rajasthan <br />
            Jaipur pincode 302017
          </p>
          <p>
            <span>Ph. No.: </span>+91 96845 00456
          </p>
          <p>
            <span>Email: </span>SurendraMehra321@gmail.com{" "}
          </p>
        </div>
        <div className="footer_socialIcon">
          <h2>Social Link</h2>
          <div className="social_icon_section">
            <div className="socialIcon">
              <div className="twitter_icon">
                <h2>
                  <TwitterIcon />
                </h2>
              </div>
              <div className="facebook_icon">
                <h2>
                  <FacebookIcon />
                </h2>
              </div>
            </div>
            <div className="socialIcon_insta">
              <div className="insta_icon">
                <h2>
                  <InstagramIcon />
                </h2>
              </div>
            </div>
            <div className="socialIcon">
              <div className="linkedIn_icon">
                <h2>
                  <LinkedInIcon />
                </h2>
              </div>
              <div className="telegram_icon">
                <h2>
                  <TelegramIcon />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
