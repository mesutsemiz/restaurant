"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({price, id, options}:Props) => {
  return (
    <div>{price}</div>
  )
}

export default Price