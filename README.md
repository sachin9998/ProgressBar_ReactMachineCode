# Progress Bar

<div align="center">
  <img src="https://github.com/user-attachments/assets/03badc00-2f9e-4b1a-b61a-28701ea8a0bf" />
</div>

**Logic:**

1. Style Inner div of Progress Bar based on the progress value.
2. Use setInterval method to increase progress value count.

App.jsx

```jsx
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
```

ProgressBar.jsx

```
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
```

Style.css

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  font-family: sans-serif;
  gap: 10px;
}

.progress {
  width: 100%;
  background: rgb(233, 236, 239);
  text-align: center;
  color: black;
  border-radius: 20px;
  /* border: 1px solid black; */
}
```
