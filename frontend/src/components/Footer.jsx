import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "24px 0",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
  };

  const columnStyle = {
    marginBottom: "16px",
  };

  const titleStyle = {
    fontWeight: "bold",
  };

  const textStyle = {
    fontSize: "14px",
    lineHeight: "1.75",
    marginTop: "8px",
  };

  const bottomBarStyle = {
    backgroundColor: "#333",
    marginTop: "24px",
    padding: "16px 0",
  };

  const bottomContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "16px",
  };

  const iconHoverStyle = {
    color: "gray",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h2 style={titleStyle}>BOOM RENTAL HARMONY</h2>
          <h3 style={{ ...titleStyle, fontSize: "20px", marginTop: "16px" }}>
            About US
          </h3>
          <p style={textStyle}>
            At Boom Rental Harmony, we understand that managing rental
            properties can be a daunting task.
            <br />
            Our mission is to empower landlords, property managers, and tenants
            by providing an innovative rental management system.
          </p>
        </div>

        <div style={{ textAlign: "center", ...columnStyle }}>
          <h3 style={{ ...titleStyle, fontSize: "20px" }}>Contact Info</h3>
          <p style={textStyle}>Phone:</p>
          <p style={textStyle}>Email:</p>
          <p style={textStyle}>
            <a
              href="mailto:info@boomrental.com"
              style={{ color: "white", textDecoration: "underline" }}
            >
              info@boomrental.com
            </a>
          </p>
        </div>

        <div style={{ textAlign: "right", ...columnStyle }}>
          <h3 style={{ ...titleStyle, fontSize: "20px" }}>Important Links</h3>
        </div>
      </div>

      <div style={bottomBarStyle}>
        <div style={bottomContainerStyle}>
          <p style={{ fontSize: "14px" }}>
            &copy; 2024 Boom Rental Harmony | Boom Rental Harmony
          </p>
          <div style={socialIconsStyle}>
            <a href="#" style={iconHoverStyle}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" style={iconHoverStyle}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={iconHoverStyle}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
