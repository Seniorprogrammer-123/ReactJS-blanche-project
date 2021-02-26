
import { MatxLoadable } from "matx";

const AffiliateForm = MatxLoadable({
  loader: () => import("./AffiliateForm")
});

const AffiliateDashboard = MatxLoadable({
  loader: () => import("./AffiliateDashboard")
});

const affiliateRoutes = [
  {
    path: "/affiliate/manage",
    component: AffiliateForm
  },
  {
    path: "/affiliate/dashboard",
    component: AffiliateDashboard
  }
];

export default affiliateRoutes;
