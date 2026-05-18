import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("auth/lajout.tsx", [
        route("/auth", "auth/page.tsx")
    ]),

] satisfies RouteConfig;
