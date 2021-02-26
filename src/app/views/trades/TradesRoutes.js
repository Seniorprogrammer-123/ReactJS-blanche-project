
import { MatxLoadable } from "matx";

const TradeForm = MatxLoadable({
  loader: () => import("./TradeForm")
});

const DetailForm = MatxLoadable({
  loader: () => import("./DetailViewTrade")
});

const tradesRoutes = [
  {
    path: "/trades/listview",
    component: TradeForm
  },
  {
    path: "/trades/detailview",
    component: DetailForm
  }
];

export default tradesRoutes;
