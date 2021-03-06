import React from "react";
import Typewriter from "typewriter-effect";

import "../css/home.css";

function Home({ data }) {
  if (data) {
    console.log(data);
    var name = data.name;
  }
  return (
    <div className="home-container">
      {/* <div className="home-banner-div">
        <img
          src={"./images/textile-home-pic.jpeg"}
          alt="home-banner"
          className="home-banner-img"
        />
      </div> */}
      <div className="banner-text">
        <h2 className="responsive-headline">
          Welcome to{" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("MDX Textiles").start();
            }}
          />
        </h2>
      </div>
    </div>
  );
}

export default Home;
