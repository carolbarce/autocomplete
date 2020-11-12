import React, { useState } from 'react'
import { Wrapper, Label } from './Autocomplete.styles'
import { DropdownList } from '../../components/DropdownList/DropdownList'
import { Input } from '../../components/Input/Input'
import { getProfessionalListService } from '../../core/services/GetProfessionalListService'

export const Autocomplete = () => {
  const [professionalList, setProfessionalList] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getProfessionalsList = async (searchTerm: string) => {
    if (!searchTerm || searchTerm === '') setProfessionalList([])
    
    const professionals = await getProfessionalListService(searchTerm)
    setProfessionalList(professionals)
  }

  const selectOption = (option: string) => {
    setIsLoading(true)
    console.log(`Buscar opcion ${option} seleccionada`)
    setProfessionalList([])
    setTimeout(() => {
      setIsLoading(false)
      console.log('Busqueda terminada');
    }, 3000)
  }

  return (
    <>
      <Wrapper>
        <Label> Encuentra profesionales de confianza: </Label>
        <Input searchProfessionals={getProfessionalsList} loading={isLoading}/>
        {professionalList.length > 0 && (
          <DropdownList list={professionalList} onClickItem={selectOption}/>
        )}
      </Wrapper>
    </>
  )
}