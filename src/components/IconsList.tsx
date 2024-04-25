import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

interface IconsProps {
  icons: IconType[]
}

const IconsList: React.FC<IconsProps> = ({ icons }) => {
  return (
    <HStack marginY={1}>
      {icons.map((icon, index) => (
        <Icon key={index} as={icon} color="gray.500" />
      ))}
    </HStack>
  )
}

export default IconsList
