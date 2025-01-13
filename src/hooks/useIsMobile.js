import { useState, useEffect } from "react";

// Custom hook to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    // Assuming mobile if width is less than 768px (you can adjust this value based on your needs)
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile(); // Check on initial render

    // Add event listener to check on window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
