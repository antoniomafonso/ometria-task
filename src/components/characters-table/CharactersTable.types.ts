import { CharacterData, Data } from "../../hooks/useCachedFetch.types";

export interface CharactersTableProps {
  charactersData: CharacterData;
}

export type GetDataProps<T> = {
  url: string;
  children: (props: {
    data: Data;
    loading: boolean;
    error: boolean;
  }) => React.ReactNode;
};

export type Character = {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  gender: string;
  species: Array<string>;
  eye_color: string;
  skin_color: string;
  homeworld: string;
  starships: Array<string>;
  vehicles: Array<string>;
  films: Array<string>;
};

export type Species = {
  name: string;
};

export type Homeworld = {
  name: string;
};

export type Starship = {
  name: string;
};

export type Vehicle = {
  name: string;
};

export type Film = {
  title: string;
};
