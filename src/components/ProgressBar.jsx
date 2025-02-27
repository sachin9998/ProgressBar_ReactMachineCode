import React from "react";

const ProgressBar = ({ value, color }) => {
  const styleObject = {
    width: `${value}%`,
    backgroundColor: color || "lightgreen",
    // height: 30,
    borderRadius: 20,
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div className="progress">
      <div style={styleObject}>
        <span>{value}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
