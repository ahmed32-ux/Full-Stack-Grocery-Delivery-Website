import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const categories = [
  {
    name: "Fruits",
    path: "fruits",
    image: assets.apple_image,
    color: "bg-orange-50",
    hover: "hover:bg-orange-100",
  },
  {
    name: "Vegetables",
    path: "vegetables",
    image: assets.carrot_image,
    color: "bg-green-50",
    hover: "hover:bg-green-100",
  },
  {
    name: "Dairy",
    path: "dairy",
    image: assets.milk_image,
    color: "bg-blue-50",
    hover: "hover:bg-blue-100",
  },
  {
    name: "Bakery",
    path: "bakery",
    image: assets.bakery_image,
    color: "bg-amber-50",
    hover: "hover:bg-amber-100",
  },
  {
    name: "Beverages",
    path: "beverages",
    image: assets.coca_cola_image,
    color: "bg-purple-50",
    hover: "hover:bg-purple-100",
  },
  {
    name: "Snacks",
    path: "snacks",
    image: assets.snack_image,
    color: "bg-pink-50",
    hover: "hover:bg-pink-100",
  },
];

function Categories() {
  const { navigate } = useAppContext();

  const handleCategoryClick = (path = "") => {
    navigate(path ? `/products/${path}` : "/products");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      {/* Section Heading */}
      <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-700 sm:text-sm">
            Explore Our Store
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Shop by Categories
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Discover fresh groceries and everyday essentials, all in one place.
          </p>
        </div>

        <button
          type="button"
          onClick={() => handleCategoryClick()}
          className="hidden shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition duration-300 hover:border-green-600 hover:bg-green-50 hover:text-green-700 sm:inline-flex"
        >
          View All
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
        {categories.map((category) => (
          <button
            key={category.path}
            type="button"
            onClick={() => handleCategoryClick(category.path)}
            aria-label={`Explore ${category.name} products`}
            className={`group relative flex min-h-[175px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 sm:min-h-[200px] sm:p-5 ${category.color} ${category.hover}`}
          >
            {/* Decorative Circle */}
            <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-white/40 transition-transform duration-500 group-hover:scale-150" />

            {/* Category Image */}
            <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
              {category.image ? (
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                />
              ) : (
                <span className="text-3xl" aria-hidden="true">
                  🛒
                </span>
              )}
            </div>

            {/* Category Name */}
            <h3 className="relative text-sm font-bold text-gray-800 transition-colors group-hover:text-green-700 sm:text-base">
              {category.name}
            </h3>

            <span className="relative mt-1 text-xs font-medium text-gray-500">
              Explore products
            </span>
          </button>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="mt-6 sm:hidden">
        <button
          type="button"
          onClick={() => handleCategoryClick()}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-green-600 hover:bg-green-50 hover:text-green-700"
        >
          View All Categories
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}

export default Categories;