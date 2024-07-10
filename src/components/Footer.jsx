import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Yurui Feng</p>
    </footer>
  );
}

export default Footer;
