"use client";
import React, { useEffect, useRef } from "react";

const TradingViewWatchlist = () => {
  const container2 = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      symbolsGroups: [
        {
          name: "Global",
          originalName: "Indices",
          symbols: [
            {
              name: "FOREXCOM:SPXUSD",
              displayName: "S&P 500 Index",
            },
            {
              name: "FOREXCOM:NSXUSD",
              displayName: "US 100 Cash CFD",
            },
            {
              name: "FOREXCOM:DJI",
              displayName: "Dow Jones Industrial Average Index",
            },
            {
              name: "INDEX:NKY",
              displayName: "Nikkei 225",
            },
          ],
        },
        {
          name: "Commodities",
          originalName: "Futures",
          symbols: [
            {
              name: "MCX:CRUDEOIL1!",
              displayName: "CRUDE OIL",
            },
            {
              name: "MCX:GOLD1!",
              displayName: "GOLD",
            },
            {
              name: "MCX:SILVER1!",
              displayName: "SILVER",
            },
          ],
        },
        {
          name: "Forex",
          originalName: "Forex",
          symbols: [
            {
              name: "FX_IDC:USDINR",
              displayName: "USD to INR",
            },
            {
              name: "FX_IDC:JPYINR",
              displayName: "JPY to INR",
            },
            {
              name: "FX_IDC:EURINR",
              displayName: "EUR to INR",
            },
          ],
        },
        {
          name: "Indices",
          symbols: [
            {
              name: "NSE:NIFTY",
              displayName: "NIFTY50",
            },
            {
              name: "NSE:BANKNIFTY",
              displayName: "BANKNIFTY",
            },
            {
              name: "NSE:FINNIFTY1!",
              displayName: "FINNIFTY",
            },
            {
              name: "INDEX:SENSEX",
              displayName: "SENSEX",
            },
          ],
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#131722",
    });
   
    container2.current.appendChild(script);
    return () => {
      container2.current.removeChild(script);
    };
  }, []);

  return (
    <div ref={container2} className="tradingview-widget-container">
      <div className="tradingview-widget-container__watchlist"></div>
    </div>
  );
};

export default TradingViewWatchlist;
