import React from 'react'
import { IntemList, ItemWrapper, Wrapper } from './DropdownList.styles'

interface Props {
  list: string[]
}

export const DropdownList = ({list}: Props) => {

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