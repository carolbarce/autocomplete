import styled from 'styled-components/macro'
import {rem} from 'polished'

export const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  
  width: 100%;

  border: 1px solid #D2D2D2;
  box-sizing: border-box;
  border-radius: 4px;
  border-top: none;
`

export const ItemWrapper = styled.div`
  width: auto;

  background: #FFFFFF;

  &:hover {
    background: #FAFAFA;
  }
`

export const IntemList = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: ${rem(42)};

  padding-left: 16px;

  font-size: ${rem(14)};
  color: #404040;
  text-transform: capitalize;
  outline: none;
`