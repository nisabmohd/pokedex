import { Link, useSearchParams } from "react-router";
import { Button, buttonVariants } from "./ui/button";

type PgainateProps = {
  hasNext: boolean;
  hasPrev: boolean;
};

export default function PokemonPaginate({ hasNext, hasPrev }: PgainateProps) {
  const [searchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? "1");

  return (
    <div className="flex items-center gap-2">
      <Link
        className={buttonVariants({ className: "w-24" })}
        to={hasPrev ? `/pokemons?page=${currentPage - 1}` : "#"}
      >
        Previous
      </Link>
      <Link
        className={buttonVariants({ className: "w-24" })}
        to={hasNext ? `/pokemons?page=${currentPage + 1}` : "#"}
      >
        Next
      </Link>
    </div>
  );
}
