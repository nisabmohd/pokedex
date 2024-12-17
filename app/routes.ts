import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/pokemons", "routes/pokemons.tsx"),
    route("/pokemon/:name", "routes/pokemon.tsx"),
] satisfies RouteConfig;
