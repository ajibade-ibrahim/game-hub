import { Button, Grid, GridItem, Show } from '@chakra-ui/react'

import GameGrid from './components/GameGrid'
import NavBar from './components/NavBar'

import './App.css'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
