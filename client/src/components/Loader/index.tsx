import React, { useEffect } from "react";
import LoadingSpin from "react-loading-spin";
import { cn } from "../../utils";
type Props = {
  isOpen: boolean;
};

function Loader({ isOpen}: Props) {
  console.log(isOpen);
  
  useEffect(() => {
    if (isOpen) {
      const handleEvent = (event: Event) => {
        (event.target as HTMLDocument).body.className = "overflow-hidden";
      };
      window.addEventListener("scroll", handleEvent);
      return () => {
        window.removeEventListener("scroll", handleEvent);
      };
    } else {
      const handleEvent = (event: Event) => {
        (event.target as HTMLDocument).body.className = "";
      };
      window.addEventListener("scroll", handleEvent);
      return () => {
        window.removeEventListener("scroll", handleEvent);
      };
    }
  },[isOpen]);
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className={`h-screen w-full fixed flex justify-center items-center ${isOpen? '': 'hidden'}`}
    >
      <div className="w-[200px] h-[200px] flex justify-center items-center bg-white ring-2 rounded-lg">
        <LoadingSpin />
      </div>
    </div>
  );
}

export default Loader;
