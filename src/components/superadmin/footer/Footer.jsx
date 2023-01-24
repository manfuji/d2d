import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
        <div className="copyright">
          <p className="text-dark text-sm">
            © Copyright 2022: {" "}
            <Link to="#">
             <b>Desserts To Door.</b>
            </Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    );
}
export default Footer;