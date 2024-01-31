"use client";

import { useEffect, useState } from "react";
import MobileHeader from "./mobileHeader";
import HeaderOne from "./header1";

export default function Header({
  handleClick,
  about,
  other2,
  reference,
  blogs,
  contact,
}) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [visible, setVisible] = useState(false);

  function getCurrentDimension() {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    if (screenSize.width <= 773) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      {visible ? (
        <MobileHeader
          handleClick={handleClick}
          reference={reference}
          about={about}
          other2={other2}
          blogs={blogs}
          contact={contact}
        />
      ) : (
        <HeaderOne
          handleClick={handleClick}
          reference={reference}
          about={about}
          other2={other2}
          blogs={blogs}
          contact={contact}
        />
      )}
    </>
  );
}
