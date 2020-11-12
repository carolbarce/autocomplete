import styled from 'styled-components/macro'
import {rem} from 'polished'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  
  width: 480px;
  height: ${rem(80)};

  color: transparent;
`

export const Label = styled.label`
  display: block;
  
  width: 100%;
  margin-bottom: ${rem(8)};

  font-weight: 600;

  color: #2B2B2B;
`