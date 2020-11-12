import styled from 'styled-components/macro'
import {rem} from 'polished'

export const Layout = styled.div`
  width: 100%;
  max-width: ${rem(1360)};

  padding-right: ${rem(30)};
  padding-left: ${rem(30)};

  margin-left: auto;
  margin-right: auto;
`

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding-top: ${rem(30)};
`