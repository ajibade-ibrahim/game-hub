import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface ISortSelectorProps {
  selectedSortOrder: string | null
  sortOrderChanged: (sortOrder: string) => void
}

const SortSelector = ({
  selectedSortOrder,
  sortOrderChanged,
}: ISortSelectorProps) => {
  const sortOptions: string[] = [
    'name',
    'released',
    'added',
    'created',
    'updated',
    'rating',
    'metacritic',
  ]
  const handleSortOptionClick = (option: string) => {
    // Handle the click event here
    sortOrderChanged(option)
    console.log(`Sorting by ${option}`)
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By :{selectedSortOrder}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem key={option} onClick={() => handleSortOptionClick(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
