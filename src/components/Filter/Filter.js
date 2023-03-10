import React, { useState } from 'react';
import { Wrapper, StyledSearchIcon, StyledInput } from './Filter.styled';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const handleChange = ({ target: { value } }) => {
    console.log(filter);
    setFilter(value);
  };

  return (
    <Wrapper>
      <StyledSearchIcon />
      <StyledInput
        type="search"
        name="filter"
        placeholder="Filter by name..."
        value={filter}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Filter;
