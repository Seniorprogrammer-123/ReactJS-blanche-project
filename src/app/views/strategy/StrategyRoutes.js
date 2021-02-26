
import { MatxLoadable } from "matx";

const StrategyForm = MatxLoadable({
  loader: () => import("./StrategyForm")
});

const StrategyCreateForm = MatxLoadable({
  loader: () => import("./StrategyCreateForm")
});

const strategyRoutes = [
  {
    path: "/strategy/manager",
    component: StrategyForm
  },
  {
    path: "/strategy/create",
    component: StrategyCreateForm
  }
];

export default strategyRoutes;
