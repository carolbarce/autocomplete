import React, { useState } from 'react';
import { Wrapper, Label } from './Autocomplete.styles'
import { Input } from '../../components/Input/Input'
import { getProfessionalListService } from '../../core/services/GetProfessionalListService'

export const Autocomplete = () => {
  const [professionalList, setProfessionalList] = useState<string[]>([])

  const getProfessionalsList = async (searchTerm: string) => {
    if (!searchTerm || searchTerm === '') setProfessionalList([])
    
    const professionals = await getProfessionalListService(searchTerm);
    setProfessionalList(professionals)
  }

  return (
    <>
      <Wrapper>
        <Label> Encuentra profesionales de confianza: </Label>
        <Input searchProfessionals={getProfessionalsList}/>
        
      </Wrapper>
      <div>
      {JSON.stringify( professionalList )}
      </div>
    </>
  );
}