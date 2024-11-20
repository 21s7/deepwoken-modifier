import React from "react";

const Mantra = function (props) {
  const { info, onClick, sharedStyle } = props;

  const handleClick = () => {
    onClick(info);
  };

  return (
    <div>
      <button onClick={handleClick} style={sharedStyle}>
        {info.mantraName}
      </button>{" "}
      {/* Применяем общий стиль */}
    </div>
  );
};

export default Mantra;
