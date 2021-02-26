
import { MatxLoadable } from "matx";

const AdminForm = MatxLoadable({
  loader: () => import("./AdminForm")
});

const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: AdminForm
  },
];

export default adminRoutes;
