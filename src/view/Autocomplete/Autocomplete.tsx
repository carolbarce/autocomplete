import React, { useState } from 'react';
import { Wrapper, Label } from './Autocomplete.styles'
import { Input } from '../../components/Input/Input'
import { getProfessionalListService } from '../../core/services/GetProfessionalListService'

export const Autocomplete = () => {
  const getProfessionalsList = (searchTerm: string) => {
    console.log('called from input');
    
    if (!searchTerm || searchTerm === '') return []

    getProfessionalListService(searchTerm);
  }

  return (
    <Wrapper>
      <Label> Encuentra profesionales de confianza: </Label>
      <Input searchProfessionals={getProfessionalsList}/>
    </Wrapper>
  );
}