
import { MatxLoadable } from "matx";

const AppForm = MatxLoadable({
  loader: () => import("./AppForm")
});

const panelRoutes = [
  {
    path: "/panels/stepbystep",
    component: AppForm
  }
];

export default panelRoutes;
