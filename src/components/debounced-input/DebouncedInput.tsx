import React, { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import { DebouncedInputProps } from "./DebouncedInput.types";

const DebouncedInput: React.FC<DebouncedInputProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    handleDebounceChange(value);
  };

  const handleDebounceChange = useMemo(() => debounce(onChange, 300), []);

  return (
    <input
      value={inputValue}
      placeholder="Search by Name"
      onChange={handleChange}
    />
  );
};

export default DebouncedInput;
