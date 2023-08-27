import { Outlet } from "react-router-dom";
import "./LayoutContainer.scss";

import AppHeader from "../AppHeader/AppHeader";
import AppSidebar from "../AppSidebar/AppSidebar";
import AppFooter from "../AppFooter/AppFooter";

export const LayoutContainer = () => {
  return (
    <div id="layout-container">
      <AppHeader />
      <AppSidebar />
      <div id="app-outlet">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  )
}