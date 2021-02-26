
import { MatxLoadable } from "matx";

const AppForm = MatxLoadable({
  loader: () => import("./AppForm")
});

const StrategyDashboard = MatxLoadable({
  loader: () => import("./StrategyDashboard")
});

const panelRoutes = [
  {
    path: "/panels/stepbystep",
    component: AppForm
  },{
    path: "/panels/dashboard",
    component: StrategyDashboard
  }
];

export default panelRoutes;
