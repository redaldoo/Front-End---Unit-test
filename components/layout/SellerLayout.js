import SellerSidebar from "components/seller-sidebar/SellerSidebar";
import Breadcrumbs from "components/UI/Breadcrumbs";
import DefaultLayout from "./DefaultLayout";

export default function SellerLayout({ children }) {
  return (
    <>
      <DefaultLayout>
        {/* <Breadcrumbs list={breadcrumbs}></Breadcrumbs> */}
        <div className="seller__container container">
          <div className="col container__sidebar">
            <SellerSidebar />
          </div>
          <div className="col container__main">{children}</div>
        </div>
      </DefaultLayout>

      <style jsx>
        {`
          @import "./../../styles/helpers/variables";

          .seller__container {
            position: relative;
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            // padding: 0;

            .container__sidebar {
              @include isDesktop {
                width: 33.33%;
              }
            }
            .container__main {
              @include isDesktop {
                width: 66.34%;
              }
            }
          }
        `}
      </style>
    </>
  );
}
