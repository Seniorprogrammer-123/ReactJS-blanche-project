
import { MatxLoadable } from "matx";

const DepositForm = MatxLoadable({
  loader: () => import("./DepositForm")
});

const depositRoutes = [
  {
    path: "/deposit/credit",
    component: DepositForm
  },{
    path: "/deposit/last",
    component: DepositForm
  }
];

export default depositRoutes;
