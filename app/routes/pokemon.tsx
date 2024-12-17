import { getPokenByName } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Route } from "./+types/pokemon";

export async function loader({ params }: Route.LoaderArgs) {
  const data = await getPokenByName(params.name);
  if (!data) throw new Response("Not Found", { status: 404 });
  return data;
}

export default function PokemonPage({
  loaderData: pokemon,
}: Route.ComponentProps) {
  return (
    <div>
      <title>{pokemon.name}</title>
    </div>
  );
}
