import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";

import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";

import accountRoutes from "./views/accounts/AccountsRoutes";
import panelRoutes from "./views/panels/PanelRoutes";
import tradesRoutes from "./views/trades/TradesRoutes";
import inviteRoutes from "./views/invite/InviteRoutes";
import strategyRoutes from "./views/strategy/StrategyRoutes";
import financeRoutes from "./views/finance/FinanceRoutes";
import depositRoutes from "./views/deposit/DepositRoutes";
import clientRoutes from "./views/client/ClientRoutes";
import affiliateRoutes from "./views/affiliate/AffiliateRoutes";
import adminRoutes from "./views/admin/AdminRoutes";
import beatradeRoutes from "./views/beatrade/BeatradeRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/panels/stepbystep" />
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
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,  
  ...accountRoutes,
  ...panelRoutes,
  ...tradesRoutes,
  ...inviteRoutes,
  ...strategyRoutes,
  ...financeRoutes,
  ...depositRoutes,
  ...clientRoutes,
  ...affiliateRoutes,
  ...adminRoutes,
  ...beatradeRoutes,
  ...errorRoute,
];

export default routes;
