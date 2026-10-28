
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function MainBanner() {
  return (
    <section className="mx-auto w-full max-w-[1800px] px-3 py-4 sm:px-6 sm:py-6 lg:px-10">
      <div className="group relative isolate min-h-[460px] overflow-hidden rounded-2xl bg-[#d8f5e9] shadow-[0_12px_35px_rgba(15,60,35,0.10)] sm:min-h-[520px] lg:min-h-0 lg:h-[450px]">

        {/* Desktop Background */}
        <img
          src={assets.main_banner_bg}
          alt="Fresh vegetables and groceries"
          className="absolute inset-0 -z-20 hidden h-full w-full object-cover object-center md:block"
        />

        {/* Mobile Background */}
        <img
          src={assets.main_banner_bg_sm}
          alt="Fresh groceries"
          className="absolute inset-0 -z-20 block h-full w-full object-cover object-center md:hidden"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#d8f5e9]/95 via-[#d8f5e9]/80 to-transparent md:via-[#d8f5e9]/60" />

        {/* Banner Content */}
        <div className="flex min-h-[460px] items-center px-6 py-12 sm:min-h-[520px] sm:px-10 lg:min-h-0 lg:h-[450px] lg:px-14 xl:px-16">
          <div className="w-full max-w-[680px]">

            {/* Eyebrow Text */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 sm:hidden">
              Freshness Delivered Daily
            </p>

            {/* Main Heading */}
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-900">
              Freshness You
              <br className="hidden sm:block" />
              {" "}Can Trust,

              <span className="mt-2 block text-[#008b3d]">
                Savings You
                <br className="hidden sm:block" />
                {" "}Will Love
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[530px] text-sm leading-6 text-slate-600 sm:hidden">
              Discover fresh groceries and everyday essentials at prices
              you'll love. Quality products, delivered right to your door.
            </p>

            {/* Shop Button */}
            <Link
              to="/products"
              className="group/btn mt-6 inline-flex items-center justify-center gap-4 rounded-xl bg-[#008b3d] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#006f30] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/40 sm:px-9 sm:py-4 sm:text-base"
            >
              Shop Now

              <img
                src={assets.arrow_right_icon_colored}
                alt=""
                className="h-4 w-4 brightness-0 invert transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Link>

            {/* Trust Indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>
                Fresh Quality
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>
                Great Prices
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>
                Home Delivery
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
