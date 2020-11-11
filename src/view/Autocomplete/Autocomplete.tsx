import React from 'react';
import { Wrapper, Label } from './Autocomplete.styles'
import { Input } from '../../components/Input/Input'

export const Autocomplete = ()=> {
  return (
    <Wrapper>
      <Label> Encuentra profesionales de confianza: </Label>
      <Input/>
    </Wrapper>
  );
}