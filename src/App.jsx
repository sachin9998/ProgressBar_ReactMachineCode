import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      }
    }, 100);

    return () => [clearInterval(time)];
  }, [progress]);

  return (
    <div className="app">
      <p>Progress Bar:</p>

      <div style={{ width: "500px" }}>
        <ProgressBar value={progress} />
      </div>
    </div>
  );
};

export default App;
