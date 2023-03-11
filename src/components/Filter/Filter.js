import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Wrapper, StyledSearchIcon, StyledInput } from './Filter.styled';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleChange = ({ target: { value } }) => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Wrapper>
      <StyledSearchIcon />
      <StyledInput
        type="search"
        name="filter"
        placeholder="Filter by name..."
        value={query}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Filter;
