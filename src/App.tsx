import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'

import GameGrid from './components/GameGrid'
import GenreList from './components/GenereList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'

import './App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const handleGenreClick = (id: number): void => {
    setSelectedGenre(id.toString())
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={selectedGenre}
            onGenreClick={handleGenreClick}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenreId={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
