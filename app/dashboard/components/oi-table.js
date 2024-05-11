"use client";
import { AppContext } from "@/app/utils/providers";
import { Button } from "@nextui-org/react";
import React, {
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { InfinitySpin } from "react-loader-spinner";

function oiDataTable() {
  const [isLoading, setLoading] = useState(false);
  const [exp, setExp] = useState([]);
  const [selectExp, setSelectExp] = useState(""); 
 
  return (
    <div className="overflow-auto w-full m-4" id="table_component">
      {isLoading == true ? (
        <div className={"flex my-8 h-48 w-full items-center justify-center"}>
          {" "}
          <InfinitySpin width="200" height="200" />
        </div>
      ) : (
        <table className="border-1 border-solid text-center border-spacing-1 table-fixed w-full h-full">
          <caption className="caption-top text-left">Table 1</caption>
          <thead className="border-1 p-1 text-sm text-amber-400 ">
            <tr>
              <th>OI</th>
              <th>OI Chg</th>
              <th>Turnover Vol(Million)</th>
              <th>Strike Price</th>
              <th>Turnover Vol(Million)</th>
              <th>OI Chg</th>
              <th>OI</th>
              <th>CE Change</th>
              <th>PE Change</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>asdas</td>
              <td>sadas</td>
              <td>gffg</td>
              <td>ert</td>
              <td>fbf</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ewf</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default oiDataTable;
