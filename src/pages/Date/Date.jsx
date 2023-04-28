import React from "react";
import "./Date.css";
import Navbar from "../../components/Navbar/Navbar";

export const Date = () => {
  const { innerHeight } = window;
  return (
    <div>
      <Navbar />
      <iframe
        src="https://calendly.com/digitalassistance/strategycall?fbclid=IwAR0RiIoopFYdbx_B9S7DnNRT51QrR0HNIOuamknZXaAC6Jo6qGrKLSUwd9k&month=2023-04"
        width="100%"
        height={innerHeight}
        frameborder="0"
        allowtransparency="true"
      />
    </div>
  );
};
