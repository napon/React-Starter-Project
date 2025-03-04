import { usePokemonData } from "./-hooks/usePokemonData";

export const usePokemonImpl = () => {
  const { data, isLoading } = usePokemonData();

  return {
    data,
    isLoading,
  };
};
