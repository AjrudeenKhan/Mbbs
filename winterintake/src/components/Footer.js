import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>© 2024 MBBS Aryvrta sky from abroad. All rights reserved.</p>
      <p>Whatsapp-9880587408, +7 9146849490</p>
      <div className="social-icons">
        <a href="#"> <InstagramIcon
          sx={{
            fontSize: 25, 
            background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)", 
            borderRadius: "20%", 
            padding: "3px",
            color: "white",
          }}
        /></a>
         <a href="https://www.youtube.com/@skyfromabroad7605" target="_blank" rel="noopener noreferrer" > 
         <YouTubeIcon style={{ fontSize: 45, color: 'red', }} /></a>
         <a><WhatsAppIcon style={{fontSize:35}}/></a>
      
      </div>
    </footer>
  );
};

export default Footer;

