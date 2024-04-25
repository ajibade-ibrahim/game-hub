import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text ml={2}>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
