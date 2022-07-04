import React from "react";
import images from "../../assets/images";

export default function Home() {
  return (
    <div>
      <img
        className="h-screen w-full object-cover"
        src={images.banner}
        alt="banner"
      />
    </div>
  );
}
