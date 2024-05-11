import { AppContext } from "@/app/utils/providers";
import { Button } from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";

function ExpiryList() {
  const symbolData = useContext(AppContext);
  const [exp, setExp] = useState([]);
  const [selectExp, setSelectExp] = useState("");

  useEffect(() => {
    return setExp(symbolData.symData.records.expiryDates);
  }, [symbolData.symData.records.expiryDates]);

  async function loadTableData(exindex) {
    setSelectExp(exindex);
    console.log(selectExp);
    try {
    } catch (error) {}
  }

  return (
    <div>
      {" "}
      <div className="flex items-center min-h-14">
        <p>Expiries: </p>
        <ul className="flex overflow-x-auto">
          {exp.slice(0, 4).map((index) => (
            <li className="p-0 m-2" key={index}>
              <div className="">
                {" "}
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => loadTableData(index)}
                >
                  {index}
                </Button>{" "}
              </div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpiryList;
