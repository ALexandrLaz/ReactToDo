import React from "react";
import "./footer.style.less";

export default function Footer({ className, text, logo } /* props*/) {
  //let { className, logo } = props;
  return (
    <footer className={className}>
      <div>{text}</div>
      <div>{logo}</div>
    </footer>
  );
}
