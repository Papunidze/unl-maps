import lazy from "react-lazy-with-preload";
import { routes } from "./patch";

export const authRoutesData = [
  {
    path: routes.dashoard,
    component: lazy(() => import("../page/dashboards/index")),
  },
];

export const unauthRoutesData = [
  {
    path: routes.login,
    component: lazy(() => import("../page/auth/index")),
  },
];
