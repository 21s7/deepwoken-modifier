import React, { useState } from "react";
import "./UI/toggle.css";

const ToggleContainer = ({ title, children, sharedStyle }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle} style={sharedStyle}>
        {title}
      </button>{" "}
      {/* Применяем стиль к титулу */}
      {isVisible && (
        <div className="toggleContent">
          {React.Children.map(
            children,
            (child) => React.cloneElement(child, { sharedStyle }) // Передаем общий стиль в каждую мантру
          )}
        </div>
      )}
    </div>
  );
};

export default ToggleContainer;
