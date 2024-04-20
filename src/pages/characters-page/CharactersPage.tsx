import React, { useState } from "react";
import { MAIN_ENDPOINT } from "../../hooks/useCachedFetch";
import {
  StyledButton,
  StyledDiv,
  StyledTitle,
  TableWrapperDiv,
} from "./CharactersPage.styles";
import { useCachedFetch } from "../../hooks/useCachedFetch";
import { PageAction } from "./CharactersPage.types";
import {
  CachedFetchData,
  CharacterData,
} from "../../hooks/useCachedFetch.types";
import DebouncedInput from "../../components/debounced-input/DebouncedInput";
import CharactersTable from "../../components/characters-table/CharactersTable";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import { NO_DATA_FOUND } from "../../global/constants";

const initialEndpoint = `${MAIN_ENDPOINT}/people`;

const CharactersPage: React.FC = () => {
  const [endpoint, setEndpoint] = useState<string>(initialEndpoint);

  const { data, error, loading } = useCachedFetch<CachedFetchData>(endpoint);

  const charactersData = data as CharacterData;

  const handleChangePage = (action: PageAction) => {
    const currentPage =
      action === PageAction.PREVIOUS
        ? charactersData?.previous
        : charactersData?.next;

    if (currentPage) {
      setEndpoint(currentPage);
    }
  };

  const handleInputChange = (searchValue: string) => {
    setEndpoint(`${initialEndpoint}/?search=${searchValue}`);
  };

  return (
    <StyledDiv>
      <StyledTitle>Star Wars Characters</StyledTitle>
      {loading && initialEndpoint === endpoint ? (
        <Loading />
      ) : !charactersData || error ? (
        <Error />
      ) : (
        <>
          <DebouncedInput onChange={handleInputChange} />
          <TableWrapperDiv
            hasData={!loading && !!charactersData.results.length}
          >
            {loading ? (
              <Loading />
            ) : !charactersData.results.length ? (
              NO_DATA_FOUND
            ) : (
              <CharactersTable charactersData={charactersData} />
            )}
          </TableWrapperDiv>
          <div>
            <StyledButton
              disabled={!charactersData?.previous || loading}
              onClick={() => handleChangePage(PageAction.PREVIOUS)}
            >
              {PageAction.PREVIOUS}
            </StyledButton>
            <StyledButton
              disabled={!charactersData?.next || loading}
              onClick={() => handleChangePage(PageAction.NEXT)}
            >
              {PageAction.NEXT}
            </StyledButton>
          </div>
        </>
      )}
    </StyledDiv>
  );
};

export default CharactersPage;
