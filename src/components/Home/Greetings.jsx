import React from "react";

function Greeting(props) {
  function greetByTime() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good Morning,";
    } else if (hour < 18) {
      greeting = "Good Afternoon,";
    } else {
      greeting = "Good Evening,";
    }

    return greeting;
  }

  const greeting = greetByTime();
  const message = `${greeting} Welcome to my portfolio`;

  return <div>{message}</div>;
}

export default Greeting;
