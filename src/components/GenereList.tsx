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
}

const GenreList: React.FC<GenreListProps> = ({ onGenreClick }) => {
  const { genres, isLoading } = useGenres()
  if (isLoading) {
    return <Spinner />
  }

  const handleGenreClick = (id: number): void => {
    onGenreClick(id)
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
              fontSize="lg"
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
