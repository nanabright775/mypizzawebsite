import React from 'react'
import  InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/footer.css"


const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <div className='soico'>
          <InstagramIcon id = 'so'/>
          <TwitterIcon id = 'so'/>
          <FacebookIcon id = 'so'/>
        </div>
      </div>
      <p> &copy; 2023 brightpizza.com</p>
    </div>
  );
}

export default Footer
