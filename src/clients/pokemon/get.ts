import { GetAllPokemonResponse, getPokemonByNameResponse } from "@/types";
import axios from "axios";
import { BASE_URL } from "../url";

export const getAllPokemon = () => {
  return axios
    .request<GetAllPokemonResponse>({
      method: "GET",
      url: `${BASE_URL}/pokemon`,
    })
    .then((res) => {
      return res.data;
    });
};

export const getPokemonByName = (name: string) => {
  return axios
    .request<getPokemonByNameResponse>({
      method: "GET",
      url: `${BASE_URL}/pokemon/${name}`,
    })
    .then((res) => {
      return res.data;
    });
};
