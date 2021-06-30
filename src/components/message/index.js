import React from "react";
import { Alert } from "reactstrap";
import "./message.style.less";

export default function Message({ type, message }) {
  return (
    <Alert className="alertMessage" color={type}>
      {message}
    </Alert>
  );
}
