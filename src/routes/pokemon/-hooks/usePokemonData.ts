import { BASE_URL, getAllPokemon } from "@/clients";
import { useQuery } from "@tanstack/react-query";

export const usePokemonData = () => {
  const result = useQuery({
    queryKey: [`${BASE_URL}/pokemon`],
    queryFn: () => getAllPokemon(),
  });

  return { ...result };
};
