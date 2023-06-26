"use client"

import { RootState } from "@/utils/store";
import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const loadState = useSelector((state: RootState) => state.loader);
  const { isLoading } = loadState;

  return isLoading ? (
    <div className="w-full mb-4">
      <div className="animate-pulse flex">
        <div className="flex-1">
          <div className="h-1 bg-orange-500"></div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Loader;
