import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-[#223a5b]">
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
