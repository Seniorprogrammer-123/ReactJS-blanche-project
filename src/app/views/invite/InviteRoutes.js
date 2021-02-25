
import { MatxLoadable } from "matx";

const InviteForm = MatxLoadable({
  loader: () => import("./InviteForm")
});

const inviteRoutes = [
  {
    path: "/invite/doinvite",
    component: InviteForm
  }
];

export default inviteRoutes;
