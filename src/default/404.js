import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="mt-5">Page Not Found</h1>
      <span
        className="bg-primary text-center p-3 rounded"
        style={{ width: "10%" }}
      >
        <Link to="/" className="text-white">
          Go back
        </Link>
      </span>
    </div>
  );
};

export default PageNotFound;
