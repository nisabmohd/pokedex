import { Link, useSearchParams } from "react-router";
import { Button, buttonVariants } from "./ui/button";

type PgainateProps = {
  hasNext: boolean;
  hasPrev: boolean;
};

export default function PokemonPaginate({ hasNext, hasPrev }: PgainateProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? "1");

  function move(payload: -1 | 1) {
    setSearchParams((prev) => ({ ...prev, page: currentPage + payload }));
  }

  return (
    <div className="flex items-center gap-2">
      <Button className="w-24" disabled={!hasPrev} onClick={() => move(-1)}>
        Previous
      </Button>
      <Button className="w-24" disabled={!hasNext} onClick={() => move(1)}>
        Next
      </Button>
    </div>
  );
}
