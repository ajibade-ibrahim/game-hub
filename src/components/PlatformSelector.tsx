import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../models.ts/models'

interface PlatformSelectorProps {
  onPlatformChange: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({
  onPlatformChange,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { platforms, error } = usePlatforms()
  if (error) {
    return null
  }
  const handleOnSelectChanged = (platform: Platform) => {
    console.log(platform)
    onPlatformChange(platform)
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platform'}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handleOnSelectChanged(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
