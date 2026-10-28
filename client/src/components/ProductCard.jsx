
import React, { useState } from "react";
import { assets, dummyProducts } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

function ProductCard() {
  const { currency } = useAppContext();

  // Har product ki quantity alag maintain hogi
  const [counts, setCounts] = useState({});

  const handleAdd = (productId) => {
    setCounts((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleRemove = (productId) => {
    setCounts((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Popular Products
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Fresh groceries at great prices.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {dummyProducts.map((product) => {
          const count = counts[product._id] || 0;

          return (
            <div
              key={product._id}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg sm:p-4"
            >
              {/* Product Image */}
              <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-lg bg-gray-50 sm:h-40">
                <img
                  src={product.image?.[0]}
                  alt={product.name}
                  className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                />

                {product.inStock === false && (
                  <span className="absolute left-2 top-2 rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                    Out of stock
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="mt-3 flex flex-1 flex-col">
                <p className="text-xs text-gray-500">
                  {product.category}
                </p>

                <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold text-gray-800 sm:text-base">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      src={
                        star <= 4
                          ? assets.star_icon
                          : assets.star_dull_icon
                      }
                      alt=""
                      className="h-3.5 w-3.5"
                    />
                  ))}

                  <span className="ml-1 text-xs text-gray-500">
                    (4.0)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-base font-bold text-green-700">
                    {currency}PKR 
                    {product.offerPrice}
                  </span>

                  <span className="text-xs text-gray-400 line-through">
                    {currency}PKR 
                    {product.price}
                  </span>
                </div>

                {/* Add / Remove Buttons */}
                <div className="mt-auto pt-4">
                  {count === 0 ? (
                    <button
                      type="button"
                      disabled={product.inStock === false}
                      onClick={() => handleAdd(product._id)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 px-2 py-2 text-sm font-medium text-green-700 transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <img
                        src={assets.add_icon}
                        alt=""
                        className="h-4 w-4"
                      />
                      Add
                    </button>
                  ) : (
                    <div className="flex items-center justify-between rounded-lg bg-green-600 px-2 py-2 text-white">
                      <button
                        type="button"
                        onClick={() => handleRemove(product._id)}
                        aria-label={`Remove one ${product.name}`}
                        className="flex h-6 w-6 items-center justify-center rounded hover:bg-green-700"
                      >
                        −
                      </button>

                      <span className="text-sm font-semibold">
                        {count}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleAdd(product._id)}
                        aria-label={`Add one ${product.name}`}
                        className="flex h-6 w-6 items-center justify-center rounded hover:bg-green-700"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductCard;
