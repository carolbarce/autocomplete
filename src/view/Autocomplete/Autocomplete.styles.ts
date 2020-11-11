import styled from 'styled-components/macro'
import {rem} from 'polished';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  
  max-width: ${rem(480)};
  height: ${rem(80)};

  color: transparent;
`