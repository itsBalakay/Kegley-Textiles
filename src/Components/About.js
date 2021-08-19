import React from "react";

function About({ data }) {
  console.log(data);
  if (data) {
    var name = data.name;
  }
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default About;
