"use client";
import { Card, CardBody } from "@nextui-org/react";
import React, { useEffect } from "react";
import TradingViewWidget from "../components/tradingview-widget";

const Stockchart = () => {
  return (
    <Card className="h-full">
      <CardBody>
        <TradingViewWidget />
      </CardBody>
    </Card>
  );
};

export default Stockchart;
