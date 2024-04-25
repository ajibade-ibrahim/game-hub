import React from 'react'
import { Game } from '../services/GamesService'
import { Card, Image, CardBody, Heading, HStack } from '@chakra-ui/react'
import PlatformIcons from './PlatformIcons'
import CriticScore from './CriticScore'
import { getModifiedImageUrl } from '../ImageCropper'

interface Props {
  game: Game
}

const GameCard: React.FC<Props> = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getModifiedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((x) => x.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
