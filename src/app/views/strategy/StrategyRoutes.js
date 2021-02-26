
import { MatxLoadable } from "matx";

const StrategyForm = MatxLoadable({
  loader: () => import("./StrategyForm")
});

const strategyRoutes = [
  {
    path: "/strategy/manager",
    component: StrategyForm
  }
];

export default strategyRoutes;
