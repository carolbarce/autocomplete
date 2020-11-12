import React, { useState, useEffect } from 'react'
import { InputField, SearchIcon, InputWrapper, LoadingIcon } from './Input.styles'

let TIME_OUT: number = 0
const DELAY_TIME: number = 700

interface Props {
  loading: boolean
  value?: string
  searchProfessionals: (searchTerm: string) => void
}

export const Input = ({value, loading, searchProfessionals}: Props) => {
  const [newValue, setNewValue] = useState<string | undefined>(value)

  useEffect(() => {
    const val = value ? value : ''
    setNewValue(val)
  }, [value])

  const onTypping = (event: React.ChangeEvent<any>) => {
    let inputText: string = event.currentTarget.value as string
    inputText = inputText.trim().toLowerCase()
    setNewValue(inputText);
    
    clearTimeout(TIME_OUT)
    TIME_OUT = setTimeout(() => searchProfessionals(inputText), DELAY_TIME)
  }

  const onSearch = () => console.log("Realizar busqueda por dicho parametro ",newValue)

  return (
    <InputWrapper>
      <InputField type="text" onChange={onTypping} value={newValue} placeholder="Qué necesitas..." loading={loading}/>
      {loading ? (
        <LoadingIcon />
      ) : (
        <SearchIcon onClick={onSearch} />
      )}    
    </InputWrapper>
  )
}


