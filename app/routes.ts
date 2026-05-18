import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("auth/lajout.tsx", [
        route("/auth", "auth/page.tsx")
    ]),
  
        layout("carnet-adresses/layout.tsx", [
            index("carnet-adresses/page.tsx"),
            route("new", "carnet-adresses/new/page.tsx"),
            route(":id", "carnet-adresses/:id/page.tsx"),
            route(":id/edit", "carnet-adresses/:id/edit/page.tsx"),
        ]),

] satisfies RouteConfig;
