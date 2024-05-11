import React from "react";
import TopNavbar from "./components/top-navbar";

function DashboardLayout({ children }) {
  return (
    <section className="h-screen pb-14">
      <TopNavbar />
      <div className="flex h-full w-full p-2">{children}</div>
    </section>
  );
}

export default DashboardLayout;
