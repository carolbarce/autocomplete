import React from 'react'
import { InputField, SearchIcon, InputWrapper, LoadingIcon } from './Input.styles'

let TIME_OUT: number = 0
const DELAY_TIME: number = 700

interface Props {
  loading: boolean
  searchProfessionals: (searchTerm: string) => void
}

export const Input = ({loading, searchProfessionals}: Props) => {

  const onTypping = (event: React.ChangeEvent<any>) => {
    let inputText: string = event.currentTarget.value as string
    inputText = inputText.trim().toLowerCase()
    
    clearTimeout(TIME_OUT)
    TIME_OUT = setTimeout(() => searchProfessionals(inputText), DELAY_TIME)
  }

  const onSearch = () => {
    console.log("Realizar busqueda")
  }  

  return (
    <InputWrapper>
      <InputField type="text" onChange={onTypping} placeholder="Qué necesitas..." loading={loading}/>
      {loading ? (
        <LoadingIcon />
      ) : (
        <SearchIcon onClick={onSearch} />
      )}    
    </InputWrapper>
  )
}


