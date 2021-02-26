
import { MatxLoadable } from "matx";

const BeaTrade = MatxLoadable({
  loader: () => import("./BeaTrade")
});

const beatradeRoutes = [
  {
    path: "/beatrade/do",
    component: BeaTrade
  }
];

export default beatradeRoutes;
