import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import useGenres from '../hooks/useGenres'
import { getModifiedImageUrl } from '../ImageCropper'

interface GenreListProps {
  onGenreClick: (id: number) => void
  selectedGenreId: string | null
}

const GenreList: React.FC<GenreListProps> = ({
  onGenreClick,
  selectedGenreId,
}) => {
  const { genres, isLoading } = useGenres()
  if (isLoading) {
    return <Spinner />
  }

  const handleGenreClick = (id: number): void => {
    onGenreClick(id)
  }

  const setFontWeight = (id: string): string => {
    return id === selectedGenreId ? 'bold' : 'normal'
  }

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getModifiedImageUrl(genre.image_background)}
            />
            <Button
              as="a"
              href="#"
              fontWeight={setFontWeight(genre.id.toString())}
              variant="link"
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
