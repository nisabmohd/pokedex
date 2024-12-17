import { getPokenByName } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Route } from "./+types/pokemon";
import { useNavigation } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const data = await getPokenByName(params.name);
  if (!data) throw new Response("Not Found", { status: 404 });
  return data;
}

export default function PokemonPage({
  loaderData: pokemon,
}: Route.ComponentProps) {
  const { state } = useNavigation();
  if (state == "loading")
    return <div className="py-10 text-center">Loading,,,</div>;
  return (
    <div className="py-8">
      <title>{pokemon.name}</title>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl capitalize">{pokemon.name}</CardTitle>
          <CardDescription>#000{pokemon.id}</CardDescription>
        </CardHeader>
        <CardContent className="flex">
          <div>
            <Avatar className="w-[400px] h-[400px] mx-auto rounded-md">
              <AvatarImage src={pokemon.sprites.front_shiny} />
              <AvatarFallback className="rounded-md text-4xl w-[100%] h-80">
                {pokemon.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            {pokemon.types.map((type) => (
              <Badge
                key={type.type.name}
                variant="outline"
                className="font-medium py-1 px-3 capitalize"
              >
                {type.type.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
