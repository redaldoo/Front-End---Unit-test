import Styles from "./Layout.module.scss";
import HeaderPages from "../header/HeaderPages";
import FooterPages from "components/footer/FooterPages";

export default function Layout({ children }) {
	return (
		<>
			<HeaderPages />
			<main className={Styles.Styles}>{children}</main>
			<FooterPages />
		</>
	);
}
