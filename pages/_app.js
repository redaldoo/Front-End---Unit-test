import "../styles/style.scss";
import DefaultLayout from "../components/layout/DefaultLayout";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, far);

import NextNProgress from "nextjs-progressbar";
import { useLoadScript } from "@react-google-maps/api";
import { Provider } from "react-redux";
import store from "store/store";

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || DefaultLayout;

	return (
		<Provider store={store}>
			<Layout>
				<NextNProgress color="#ecc94b" options={{ showSpinner: false }} />
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
