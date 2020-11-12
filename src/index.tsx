import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Layout } from './components/Layout/Layout.styles'
import {Autocomplete} from './view/Autocomplete/Autocomplete'
import './index.css'

ReactDOM.render(
  <Layout>
    <Container>
      <Autocomplete />
    </Container>
  </Layout>,
  document.getElementById('root')
)
