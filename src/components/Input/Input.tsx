import React from 'react';
import { InputField, SearchIcon, InputWrapper } from './Input.styles'

export const Input = ()=> {
  return (
    <InputWrapper>
      <InputField type="text" name="autocompleteInput" id="autocompleteInput" placeholder="Qué necesitas..."/>
      <SearchIcon onClick={onSearch} />
    </InputWrapper>
  );
}

const onSearch = () => {
  console.log("click search icon"); 
}