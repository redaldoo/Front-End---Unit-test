import AdminSidebar from "components/admin-sidebar/AdminSidebar";
import { useEffect, useState } from "react";
import AdminHeader from "./../admin-header/AdminHeader";
import AdminLayoutStyle from "./AdminLayout.module.scss";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <div className={AdminLayoutStyle["page__wrapper"]}>
        <div className={AdminLayoutStyle["sidebar__container"]}>
          <AdminSidebar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className={AdminLayoutStyle["main__container"]}>
          <AdminHeader setIsOpen={setIsOpen} />
          <main>{children}</main>
        </div>
      </div>

      <style jsx>
        {`
          main {
          }
        `}
      </style>
    </>
  );
}
