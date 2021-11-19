import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import FooterPages from "components/footer/FooterPages";
import HeaderPages from "components/header/HeaderPages";
import withAuth from "utils/withAuth";

const DefaultLayout = ({ children }) => {
  // const stripePromise = loadStripe(
  //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  // );
  return (
    <>
      {/* <Elements stripe={stripePromise}> */}
      <HeaderPages />
      <main>{children}</main>
      <FooterPages />
      {/* </Elements> */}

      <style jsx>
        {`
          main {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
};

export default withAuth(DefaultLayout);
