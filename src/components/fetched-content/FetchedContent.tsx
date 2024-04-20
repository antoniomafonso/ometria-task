import React from "react";
import { StyledError, StyledLoading } from "./FetchedContent.styles";
import { FetchedContentProps } from "./FetchedContent.types";

const FetchedContent: React.FC<FetchedContentProps> = ({
  children,
  isFetching,
  hasError,
}) => {
  return isFetching ? <StyledLoading /> : hasError ? <StyledError /> : children;
};

export default FetchedContent;
