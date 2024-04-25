import React from 'react'
import { Game } from '../services/GamesService'
import { Card, Image, CardBody, Heading } from '@chakra-ui/react'
import PlatformIcons from './PlatformIcons'

interface Props {
  game: Game
}

const GameCard: React.FC<Props> = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((x) => x.platform)}
        />
      </CardBody>
    </Card>
  )
}

export default GameCard
