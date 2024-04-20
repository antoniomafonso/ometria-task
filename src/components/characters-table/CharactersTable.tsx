import React from "react";
import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTh,
  StyledTd,
  StyledUl,
} from "./CharactersTable.styles";
import { CachedFetchData } from "../../hooks/useCachedFetch.types";
import {
  Character,
  CharactersTableProps,
  Film,
  GetDataProps,
  Homeworld,
  Species,
  Starship,
  Vehicle,
} from "./CharactersTable.types";
import { useCachedFetch } from "../../hooks/useCachedFetch";
import FetchedContent from "../fetched-content/FetchedContent";
import { FIELDS, NOT_AVAILABLE } from "../../global/constants";

function GetData<T>({ url, children }: GetDataProps<T>) {
  const { data, loading, error } = useCachedFetch<CachedFetchData>(url);

  return <>{children({ data, loading, error })}</>;
}

const GetSpecieData = GetData as typeof GetData<Species>;

const GetHomeworldData = GetData as typeof GetData<Homeworld>;

const GetStarshipData = GetData as typeof GetData<Starship>;

const GetVehicleData = GetData as typeof GetData<Vehicle>;

const GetFilmData = GetData as typeof GetData<Film>;

const CharactersTable: React.FC<CharactersTableProps> = ({
  charactersData,
}) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          {FIELDS.map((field, idx) => (
            <StyledTh key={idx}>{field}</StyledTh>
          ))}
        </tr>
      </StyledTableHead>
      <StyledTableBody>
        {charactersData.results.map((character: Character) => (
          <tr key={character.name}>
            <StyledTd>{character.name}</StyledTd>
            <StyledTd>{character.birth_year}</StyledTd>
            <StyledTd>{character.height}</StyledTd>
            <StyledTd>{character.mass}</StyledTd>
            <StyledTd>{character.gender}</StyledTd>
            <StyledTd>
              {character.species.length ? (
                <StyledUl>
                  {character.species.map((getSpecieUrl: string) => (
                    <GetSpecieData key={getSpecieUrl} url={getSpecieUrl}>
                      {({ data, error, loading }) => (
                        <li>
                          <FetchedContent isFetching={loading} hasError={error}>
                            {(data as Species)?.name}
                          </FetchedContent>
                        </li>
                      )}
                    </GetSpecieData>
                  ))}
                </StyledUl>
              ) : (
                NOT_AVAILABLE
              )}
              {}
            </StyledTd>
            <StyledTd>{character.eye_color}</StyledTd>
            <StyledTd>{character.skin_color}</StyledTd>
            <StyledTd>
              {character.homeworld ? (
                <GetHomeworldData url={character.homeworld}>
                  {({ data, error, loading }) => (
                    <FetchedContent isFetching={loading} hasError={error}>
                      {(data as Homeworld)?.name}
                    </FetchedContent>
                  )}
                </GetHomeworldData>
              ) : (
                NOT_AVAILABLE
              )}
            </StyledTd>
            <StyledTd>
              {character.starships.length ? (
                <StyledUl>
                  {character.starships.map((getStarshipUrl: string) => (
                    <GetStarshipData key={getStarshipUrl} url={getStarshipUrl}>
                      {({ data, error, loading }) => (
                        <li>
                          <FetchedContent isFetching={loading} hasError={error}>
                            {(data as Starship)?.name}
                          </FetchedContent>
                        </li>
                      )}
                    </GetStarshipData>
                  ))}
                </StyledUl>
              ) : (
                NOT_AVAILABLE
              )}
            </StyledTd>
            <StyledTd>
              {character.vehicles.length ? (
                <StyledUl>
                  {character.vehicles.map((getVehicleUrl: string) => (
                    <GetVehicleData key={getVehicleUrl} url={getVehicleUrl}>
                      {({ data, error, loading }) => (
                        <li>
                          <FetchedContent isFetching={loading} hasError={error}>
                            {(data as Vehicle)?.name}
                          </FetchedContent>
                        </li>
                      )}
                    </GetVehicleData>
                  ))}
                </StyledUl>
              ) : (
                NOT_AVAILABLE
              )}
            </StyledTd>
            <StyledTd>
              {character.films.length ? (
                <StyledUl>
                  {character.films.map((getFilmUrl: string) => (
                    <GetFilmData key={getFilmUrl} url={getFilmUrl}>
                      {({ data, error, loading }) => (
                        <li>
                          <FetchedContent isFetching={loading} hasError={error}>
                            {(data as Film)?.title}
                          </FetchedContent>
                        </li>
                      )}
                    </GetFilmData>
                  ))}
                </StyledUl>
              ) : (
                NOT_AVAILABLE
              )}
            </StyledTd>
          </tr>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default CharactersTable;
