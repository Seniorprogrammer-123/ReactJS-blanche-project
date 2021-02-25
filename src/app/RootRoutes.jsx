import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";

import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";

import accountRoutes from "./views/accounts/AccountsRoutes";
import panelRoutes from "./views/panels/PanelRoutes";
import tradesRoutes from "./views/trades/TradesRoutes";
import inviteRoutes from "./views/invite/InviteRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,  
  ...accountRoutes,
  ...panelRoutes,
  ...tradesRoutes,
  ...inviteRoutes,
  ...errorRoute,
];

export default routes;
