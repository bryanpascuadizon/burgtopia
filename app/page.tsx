"use client";

import React, { useEffect, useState } from "react";

//COMPONENTS
import Product from "@/components/Product";

const Home = () => {
  const [productList, setProductList] = useState<Array<object>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchList = await fetch("/api/products");
      const products = await fetchList.json();
      setProductList(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-4 mb-10 max-w-15">
        {productList.map((item: any) => (
          <Product data={item} key={item._id} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Home;
