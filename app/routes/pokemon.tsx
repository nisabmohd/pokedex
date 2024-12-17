import { getPokenByName } from "@/lib/data";
import type { Route } from "./+types/pokemon";

export async function loader({ params }: Route.LoaderArgs) {
  return await getPokenByName(params.name);
}

export default function PokemonPage({ loaderData }: Route.ComponentProps) {
  if (!loaderData) throw new Response("Not Found", { status: 404 });
  return (
    <div>
      <title>{loaderData.name}</title>
      {loaderData.name}
    </div>
  );
}
