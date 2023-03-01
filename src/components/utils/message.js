import React from "react";
import swal from "sweetalert";

const MessageAlert = ({ message, title, type }) => {
  return () => swal(title, message, type);
};

export default MessageAlert;
