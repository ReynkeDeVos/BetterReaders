import { useState } from "react";
import image from "../assets/ezgif.com-speed.gif";

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
            className="rounded bg-gray-500 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
            onClick={handleClick}>
            I solemnly swear that I am up to no good
          </button>
        </>
      )}
      {showImage && (
        <div className="flex flex-col items-center">
          <img src={image} alt="Marauders Map" />{" "}
          <h1 className="p-3 text-xl font-bold">Let the mischief begin!</h1>
        </div>
      )}
    </div>
  );
};

export default MaraudersMap;
