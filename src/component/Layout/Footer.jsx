import React from "react";
import "../../css/footer.css"
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialSkype } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialReddit } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="grid">
          <div className="col ">
            <h3>INFO</h3>
            <ul>
              <li>Formats</li>
              <li>Comperession</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="col ">
            <h3>RESOURCES</h3>
            <ul>
              <li>Developer API</li>
              <li>Tools</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col">
            <h3>COMPANY</h3>
            <ul>
              <li>About Us</li>
              <li>Sustainability</li>
              <li>Terms of Service</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className=" col-4">
            <div className="news-letter">
              <p>Subscribe to our email newsletter</p>
              <div className="news-letter-input">
                <input type="email" placeholder="Email@gmail.com" />
                <button className="btn">Subscribe</button>
              </div>
            </div>
            <div className="social-media">
              <SlSocialGoogle className="icon" />
              <TiSocialYoutubeCircular className="icon" />
              <TiSocialFacebook className="icon" />
              <SlSocialReddit className="icon" />
              <SlSocialPintarest className="icon" />
              <SlSocialSkype className="icon" />
              <SlSocialInstagram className="icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
