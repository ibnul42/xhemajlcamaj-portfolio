import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;
