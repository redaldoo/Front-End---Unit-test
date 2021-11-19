import Styles from "./Layout.module.scss";
import Header from "../header/Header";
import Footer from "components/footer/Footer";
import HeaderHome from "components/header/HeaderHome";
import FooterPages from "components/footer/FooterPages";
import withoutAuth from "utils/withoutAuth";

const LayoutHome = ({ children }) => {
  return (
    <>
      <HeaderHome />
      <main className={Styles.Styles}>{children}</main>
      <FooterPages />
    </>
  );
};

export default withoutAuth(LayoutHome);
