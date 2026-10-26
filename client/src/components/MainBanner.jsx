
import React from "react";
import { assets } from "../assets/assets";

function MainBanner() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 lg:px-10">
      <div className="overflow-hidden rounded-2xl shadow-sm">
        <img
          src={assets.main_banner_bg}
          alt="Main Banner"
          className="hidden h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.01] md:block"
        />

        <img
          src={assets.main_banner_bg_sm}
          alt="Main Banner"
          className="block h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.01] md:hidden"
        />
      </div>
    </section>
  );
}

export default MainBanner;
