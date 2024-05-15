import React, { useState } from "react";
import image from "./ezgif.com-speed.gif";

const MaraudersMap = () => {
  const [showImage, setShowImage] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleClick = () => {
    setShowImage(true);
    setButtonVisible(false);
  };

  return (
    <div>
      {buttonVisible && (
        <>
          <button
            className="bg-gray-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            I solemnly swear that I am up to no good
          </button>
        </>
      )}
      {showImage && (
        <div className="flex flex-col items-center">
          <img src={image} alt="Marauders Map" />{" "}
          <h1 className="text-xl font-bold p-3">Let the mischief begin!</h1>
        </div>
      )}
    </div>
  );
};

export default MaraudersMap;
