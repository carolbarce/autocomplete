import React from 'react'
import { IntemList, ItemWrapper, Wrapper } from './DropdownList.styles'

export const DropdownList = () => {
  const list = ["pintle", "pinter", "pintos", "pintar", "pintor"]
  
  return (
    <Wrapper>
      {list.map((listItem, index) => (
        <ItemWrapper key={index}>
          <IntemList>
            {listItem}
          </IntemList>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}