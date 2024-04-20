import {
  Character,
  Film,
  Homeworld,
  Species,
  Starship,
  Vehicle,
} from "../components/characters-table/CharactersTable.types";

export type CharacterData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Character>;
};

export type Data =
  | CharacterData
  | Species
  | Homeworld
  | Film
  | Vehicle
  | Starship
  | null;

export type CachedFetchData = {
  data: Data;
  loading: boolean;
  error: boolean;
};
