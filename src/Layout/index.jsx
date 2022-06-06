import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-[#223a5b]">
      <div className="h-screen flex flex-col justify-between overflow-y-auto">
        <Header />
        <div className="flex flex-col justify-between h-[calc(100vh-100px)]">
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
