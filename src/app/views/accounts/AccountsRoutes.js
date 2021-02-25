
import { MatxLoadable } from "matx";

const AccountForm = MatxLoadable({
  loader: () => import("./AccountForm")
});

const accountsRoutes = [
  {
    path: "/accounts/create",
    component: AccountForm
  }
];

export default accountsRoutes;
