import { Outlet } from "react-router-dom";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";

export default function Layout() {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}