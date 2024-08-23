import React from "react";
import { HomeModernIcon } from "@heroicons/react/16/solid";

function Top() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Insta Shohor</h1>
      <HomeModernIcon className="h-6 w-6" />
    </div>
  );
}

export default Top;
