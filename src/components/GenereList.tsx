import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

import useGenres from '../hooks/useGenres'
import { getModifiedImageUrl } from '../ImageCropper'

const GenreList: React.FC = () => {
  const { genres, isLoading } = useGenres()
  if (isLoading) {
    return <Spinner />
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
