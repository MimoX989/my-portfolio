import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const DaynightDisplay = () => {
  const [showTime, setShowTime] = useState(9);

  useEffect(() => {
    const date = new Date();
    setShowTime(date.getHours());
    //  + ":" + date.getMinutes() + ":" + date.getSeconds();
  }, [showTime]);


  if (showTime > 4 && showTime < 10) {
    return (
      <Image
        src={"https://img.icons8.com/color/48/vaporwave.png"}
        alt="dawn"
        width={48}
        height={48}
      />
    );
  } else if (showTime >= 10 && showTime <= 16) {
    return (
      <Image
        src={"https://img.icons8.com/emoji/48/sun-emoji.png"}
        alt="day"
        width={48}
        height={48}
      />
    );
  } else if (showTime > 16 && showTime < 20) {
    return (
      <Image
        src={"https://img.icons8.com/emoji/48/sun-emoji.png"}
        alt="dusk"
        width={48}
        height={48}
      />
    );
  } else {
    return (
      <Image
        src={"https://img.icons8.com/arcade/64/partly-cloudy-night.png"}
        alt="night"
        width={48}
        height={48}
      />
    );
  }
};
export default DaynightDisplay;
