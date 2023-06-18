import { useState } from "react";

// Write your Color component here
// only one result when clicked
// const Color = ({ color, setSelectedColor }) => {
//   return <div className={color} onClick={() => setSelectedColor(color)}></div>;
// };

// handleClick gives the initial action when a circle is clicked
const Color = ({ color, setSelectedColor, selectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  const circleClassName = color === selectedColor ? `${color} selected` : color;

  return <div className={circleClassName} onClick={handleClick}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="violet"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="orange"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
