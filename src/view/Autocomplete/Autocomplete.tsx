import React from 'react';
import { Wrapper } from './Autocomplete.styles'

export const Autocomplete = ()=> {
  return (
    <Wrapper>
      <label> Encuentra profesionales de confianza: </label>
      <input type="text" name="autocompleteInput" id="autocompleteInput" placeholder="Qué necesitas..."/>
    </Wrapper>
  );
}