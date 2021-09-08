import React from "react";
import Footer from "../../Layout/Footer";
import Header from "./Header";
import { Children } from "utils/interfaces";

export default function DashLayout({ children }: Children) {
  return (
    <div className="static">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
