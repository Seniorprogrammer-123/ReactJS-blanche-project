
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
    path: "/trades/detailview/:param1/:param2/:param3/:param4/:param5/:param6",
    component: DetailForm
  }
];

export default tradesRoutes;
