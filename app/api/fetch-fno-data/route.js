
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const sym = await req.json();
  try {
    const result = await fetch(
      `https://www.nseindia.com/api/option-chain-indices?symbol=` + sym
    );
    const data = await result.json();
    saveData(sym, data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}

async function saveData(sym, datax) {
  const filtered = datax.filtered.data;
  const timestamp = datax.records.timestamp;
  const uvalue = datax.records.underlyingValue;
  const atm = Math.round(uvalue / 50, 0) * 50;
  const supabase = createClient();

  //   if (
  //     index.expiryDate === selectExp &&
  //     index.strikePrice >= atm - 200 &&
  //     index.strikePrice <= atm + 200
  //   ) {
  //     strikeArray.push(index.strikePrice);
  //   }
  //   setLoading(false);
  // const user = supabase.auth.user();
  // console.log(user);
  const { data, error } = await supabase
    .from("fno_datatable")
    .upsert([
      {
        symbol: `${sym}`,
        expiry: `08-Mar-2024`,
        ce_oi: `78`,
        ceoi_chg: `67`,
        ce_ttv: "65",
        ce_ltv: "456",
        ce_mv: "45",
        pe_oi: "564",
        peoi_chg: "456",
        pe_ttv: "456",
        pe_ltv: "45",
        pe_mv: "45",
      },
    ])
    .select();

  console.log(data);
  console.log(error);
}
