
import { MatxLoadable } from "matx";

const ClientForm = MatxLoadable({
  loader: () => import("./ClientForm")
});

const clientRoutes = [
  {
    path: "/client/dashboard",
    component: ClientForm
  },
];

export default clientRoutes;
