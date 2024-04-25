import { Badge } from '@chakra-ui/react'

interface CriticScoreProps {
  score: number
}

const CriticScore: React.FC<CriticScoreProps> = ({ score }) => {
  type ColorScheme = 'green' | 'yellow' | 'green'
  const color = score >= 90 ? 'green' : score >= 80 ? 'yellow' : 'red'
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  )
}

export default CriticScore
