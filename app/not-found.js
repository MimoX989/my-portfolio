import React from "react";
import error from "../public/404.svg";
import { Image } from "@nextui-org/react";

const NotFound = () => {
  return (
    <section className="flex h-screen p-5 justify-center">
      <div className="flex-col align-middle content-center">
        <Image
          alt="404-page-not-found"
          width="fill"
          height="fill"
          src={"/404.svg"}
        />
        <p className="text-center text-xl">
          Lost somewhere? Return to homepage!
        </p>
      </div>
    </section>
  );
};

export default NotFound;
