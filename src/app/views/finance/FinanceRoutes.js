
import { MatxLoadable } from "matx";

const FinanceForm = MatxLoadable({
  loader: () => import("./FinanceForm")
});

const financeRoutes = [
  {
    path: "/finance/index",
    component: FinanceForm
  }
];

export default financeRoutes;
