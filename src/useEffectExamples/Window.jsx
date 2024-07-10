import { useState, useEffect } from "react";

export const Window = () => {
    const [windowWidth, setWindoWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindoWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {windowWidth}
    </>
  );
};

export default Window;