import React from "react";

import "../css/footer.css";

function Footer({ data }) {
  if (data) {
    var company = data.company;
    var email = data.email;
    var phone = data.phone;
    var address = data.address.map((info) => {
      return (
        <div className="address-info">
          <h5>{info.street}</h5>
          <h5>
            {info.city}, {info.state} {info.zip}
          </h5>
        </div>
      );
    });
  }
  return (
    <div className="footer-container">
      <div className="main-container">
        <div className="first-row">
          <h3>Contact Us</h3>
          <h5>{company}</h5>
          <h5>{address}</h5>
          <h5>Phone: {phone}</h5>
          <h5>Email: {email}</h5>
        </div>
        <div className="second-row">
          <h3>Second Row</h3>
          <h5>content</h5>
          <h5>content</h5>
          <h5>content</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
