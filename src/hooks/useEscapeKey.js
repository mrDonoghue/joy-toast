import React from "react";
const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      console.log("key pressed?");
      if (e.code === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
};

export default useEscapeKey;
