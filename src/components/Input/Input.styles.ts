import styled from 'styled-components/macro'
import {rem} from 'polished';
import { ReactComponent as SearchSVG } from '../../icons/search.svg'

export const InputWrapper = styled.div`
  position: relative;
  width: auto;
`

export const InputField = styled.input`
  display: inline-flex;
  width: 100%;
  height: ${rem(48)};

  background: #FFFFFF;

  border: 1px solid #D2D2D2;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover:not(:focus) {
    background: #FAFAFA;
    border: 1px solid #9B9B9B;
  }

  &:focus {
    border: 1px solid #FF7300;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px rgba(255, 115, 0, 0.2);
    border-radius: 4px;
    outline:none;
  }
`

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  top: 12px;
  right: 12px;

  path {
    stroke: #757575;
  }

  ${InputField}:focus & :focus &{
    stroke:#FF7300;
    path {
      stroke:#FF7300;
    }
  }
`
