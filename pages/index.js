import HomePage2 from "./home-v2/index";
// import "bootstrap/dist/css/bootstrap.min.css";
import LayoutHome from "../components/layout/LayoutHome";

export default function Home() {
  return (
    <>
      <HomePage2 />
    </>
  );
}
Home.Layout = LayoutHome;
