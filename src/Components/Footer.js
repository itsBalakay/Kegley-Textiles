import React from "react";

function Footer({ data }) {
  if (data) {
    var company = data.company;
    var email = data.email;
    var phone = data.phone;
    var address = data.address.map((info) => {
      return (
        <div className="address-info">
          <li>{info.street}</li>
          <li>
            {info.city}, {info.state} {info.zip}
          </li>
        </div>
      );
    });
  }
  return (
    <>
      <div className="main-container">
        <div className="first-row">
          <h3>Address</h3>
          <ul className="address-list">{address}</ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
