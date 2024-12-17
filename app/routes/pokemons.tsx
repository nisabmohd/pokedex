import { getAllPokemons, getPokenByName } from "@/lib/data";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigation } from "react-router";
import type { Route } from "./+types/pokemons";
import PokemonPaginate from "@/components/paginate";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Pokemons" }, { name: "List of all pokemons" }];
}

const page_limit = 12;

export async function loader({ request }: Route.LoaderArgs) {
  const searchParams = new URL(request.url).searchParams;
  const currentPage = +(searchParams.get("page") ?? "1");

  const data = await getAllPokemons({
    limit: page_limit,
    offset: page_limit * (currentPage - 1),
  });
  if (!data) return { pokemons: [], next: null, previous: null };
  const allPokemonsWithData = await Promise.all(
    data.results.map(async (it) => {
      const data = await getPokenByName(it.name);
      return data;
    })
  );
  const finalData = allPokemonsWithData.filter((it) => !!it);
  return { pokemons: finalData, ...data };
}

export default function PokemonsPage({ loaderData }: Route.ComponentProps) {
  const { state } = useNavigation();
  if (state == "loading")
    return <div className="py-10 text-center">Loading,,,</div>;

  return (
    <div className="py-8 md:px-0 px-5 flex flex-col items-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-8">
        {loaderData.pokemons.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl capitalize">
                  {pokemon.name}
                </CardTitle>
                <CardDescription>#000{pokemon.id}</CardDescription>
              </CardHeader>
              <CardContent className="min-w-96">
                <Avatar className="w-[100%] h-80 mx-auto rounded-md">
                  <AvatarImage src={pokemon.sprites.front_shiny} />
                </Avatar>
              </CardContent>
              <CardFooter className="flex items-center gap-2 flex-wrap">
                {pokemon.types.map((type) => (
                  <Badge
                    key={type.type.name}
                    variant="outline"
                    className="font-medium py-1 px-3 capitalize"
                  >
                    {type.type.name}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <PokemonPaginate
        hasNext={loaderData.next != null}
        hasPrev={loaderData.previous != null}
      />
    </div>
  );
}
