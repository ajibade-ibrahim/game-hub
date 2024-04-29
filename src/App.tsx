import { Button, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'

import GameGrid from './components/GameGrid'
import GenreList from './components/GenereList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './models.ts/models'

import './App.css'
import SortSelector from './components/SortSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  )
  const [sortOrder, setSortOrder] = useState<string | null>(null)

  const handleSortOrderChanged = (order: string): void => {
    setSortOrder(order)
  }

  const handleGenreClick = (id: number): void => {
    setSelectedGenre(id.toString())
  }

  const handlePlatformChange = (platform: Platform): void => {
    setSelectedPlatform(platform)
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
        <HStack spacing={4} paddingLeft={2} marginBottom={2}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onPlatformChange={handlePlatformChange}
          />
          <SortSelector
            sortOrderChanged={handleSortOrderChanged}
            selectedSortOrder={sortOrder}
          />
        </HStack>
        <GameGrid
          sortOrder={sortOrder}
          selectedGenreId={selectedGenre}
          selectedPlatformId={selectedPlatform?.id.toString() ?? null}
        />
      </GridItem>
    </Grid>
  )
}

export default App
