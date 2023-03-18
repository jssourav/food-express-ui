import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Head />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
