import React from 'react';
import { InputField, SearchIcon, InputWrapper } from './Input.styles'

let TIME_OUT: number = 0;
const DELAY_TIME: number = 700;

interface Props {
  searchProfessionals: (searchTerm: string) => void
}

export const Input = ({searchProfessionals}: Props) => {

  const onSearch = () => {
    console.log("click search icon"); 
  }
  
  const onTypping = (event: React.ChangeEvent<any>) => {
    let inputText: string = event.currentTarget.value as string;
    inputText = inputText.trim().toLowerCase();
    
    clearTimeout(TIME_OUT);
    TIME_OUT = setTimeout(() => searchProfessionals(inputText), DELAY_TIME);
  }

  return (
    <InputWrapper>
      <InputField type="text" onChange={onTypping} name="autocompleteInput" id="autocompleteInput" placeholder="Qué necesitas..."/>
      <SearchIcon onClick={onSearch} />
    </InputWrapper>
  );
}


