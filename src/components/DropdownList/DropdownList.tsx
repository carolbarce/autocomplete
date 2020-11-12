import React from 'react'
import { IntemList, ItemWrapper, Wrapper } from './DropdownList.styles'

interface Props {
  list: string[]
  onClickItem: (value: string) => void
}

export const DropdownList = ({list, onClickItem}: Props) => {
  
  const selectItem = (position: number) => onClickItem(list[position])

  return (
    <Wrapper>
      {list.map((listItem, index) => (
        <ItemWrapper key={index}>
          <IntemList onClick={()=>selectItem(index)}>
            {listItem}
          </IntemList>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}