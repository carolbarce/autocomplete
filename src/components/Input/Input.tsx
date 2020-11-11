import React from 'react';
import { InputField, SearchIcon, InputWrapper } from './Input.styles'

export const Input = ()=> {
  return (
    <InputWrapper>
      <InputField type="text" onChange={onTypping} name="autocompleteInput" id="autocompleteInput" placeholder="Qué necesitas..."/>
      <SearchIcon onClick={onSearch} />
    </InputWrapper>
  );
}

const onSearch = () => {
  console.log("click search icon"); 
}

const onTypping = (event: React.ChangeEvent<any>) => {
  const inputText: string = event.currentTarget.value as string;
  searchProfessionals(inputText);
}

const searchProfessionals = (searchTerm: string) => {
  console.log('busquemos profesionales de confianza: ', searchTerm)
}
