import React from "react";
const useEscapeKey = (callback) => {
  const handleKeyDown = React.useCallback(
    (e) => {
      console.log("key pressed?");
      if (e.code === "Escape") {
        callback();
      }
    },
    [callback]
  );
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
};

export default useEscapeKey;
