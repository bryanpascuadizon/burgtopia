"use client";

import React, { useEffect, useState } from "react";

//COMPONENT
import Product from "@/components/Product"

//ASSSETS
import products from "@/assets/products";
import { useDispatch } from "react-redux";
import { openNotif } from "@/utils/reducers/notifsReducer";

const Home = () => {
  const [productList, setProductList] = useState<Array<object>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
      <div className="home">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-4 mb-10 max-w-15">
          {productList.map((item: any) => (
            <Product data={item} key={item.id} />
          ))}
        </div>
        <br />
      </div>
  );
};

export default Home;
