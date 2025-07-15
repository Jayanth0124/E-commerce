import React, { useEffect } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../Redux/Customers/Product/Action";

const Homepage = () => {
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((state) => state);

  useEffect(() => {
    // Fetch products for different categories on homepage load
    dispatch(
      findProducts({
        category: "Men's Kurta",
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 10000,
        minDiscount: 0,
        stock: null,
        sort: "price_low",
        pageNumber: 1,
        pageSize: 10,
      })
    );
    // Add more dispatch calls for other categories if needed
  }, [dispatch]);

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection
          data={customersProduct.products?.content || []}
          section={"Men's Kurta"}
        />
        {/* Add more HomeProductSection components for other categories */}
      </div>
    </div>
  );
};

export default Homepage;
