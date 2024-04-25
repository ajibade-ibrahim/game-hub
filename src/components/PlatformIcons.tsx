import React from 'react'
import { IconType } from 'react-icons'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../services/GamesService'
import IconsList from './IconsList'

interface PlatformIconsProps {
  platforms: Platform[]
}

const PlatformIcons: React.FC<PlatformIconsProps> = ({ platforms }) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    <IconsList
      icons={platforms.map((platform) => platformIcons[platform.slug])}
    />
  )
}

export default PlatformIcons
