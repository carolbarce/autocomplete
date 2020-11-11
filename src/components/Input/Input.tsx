import React from 'react';
import { getProfessionalListService } from '../../core/services/GetProfessionalListService'
import { InputField, SearchIcon, InputWrapper } from './Input.styles'

let TIME_OUT: number = 0;
const DELAY_TIME: number = 700;

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
  clearTimeout(TIME_OUT);
  TIME_OUT = setTimeout(() => searchProfessionals(inputText), DELAY_TIME);
}

const searchProfessionals = (searchTerm: string) => getProfessionalListService(searchTerm)
