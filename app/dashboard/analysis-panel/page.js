"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import IndicesDropdown from "../components/indices-dropdown";
import OiDataTable from "../components/oi-table";
import { AppContext } from "@/app/utils/providers";
import ExpiryList from "../components/expiry-list";

function page() {
  const symbolData = useContext(AppContext);
  const timestamp = "345345"//symbolData.symData.records.timestamp;
  const setSymData = "dfsdf"//symbolData.setSymData;
  const [spotvalue, setSpotValue] = useState("--");

  useEffect(() => {
    // setSpotValue(symbolData.symData.records.underlyingValue);
  }, [spotvalue]);

  return (
    <div className="grid grid-cols-6 grid-rows-9 gap-4 w-full">
      <div className="crd-holder col-span-1 row-span-9 row-start-1 h-full">
        <IndicesDropdown values={{ timestamp, spotvalue, setSymData }} />
      </div>
      <div className="crd-holder col-span-4 row-start-1 row-span-9 h-full">
        <ExpiryList />
        <Suspense fallback={<p>Loading...!</p>}>
          <OiDataTable />
        </Suspense>
      </div>
      <div className="crd-holder col-span-1 row-span-9 row-start-1 h-full">
        3
      </div>
    </div>
  );
}

export default page;
