import { createFileRoute } from "@tanstack/react-router";
import CardLoading from "./-components/CardLoading";
import PokemonCard from "./-components/PokemonCard";
import { usePokemonImpl } from "./-usePokemonImpl";

export const Route = createFileRoute("/pokemon/")({
  component: Pokemon,
});

function Pokemon() {
  const { data, isLoading } = usePokemonImpl();

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-5 gap-4 mb-6">
          {Array(15)
            .fill(0)
            .map(() => (
              <CardLoading />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4 mb-6">
          {data?.results.map((pokemon) => <PokemonCard key={pokemon.name} />)}
        </div>
      )}
    </>
  );
}
