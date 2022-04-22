import { IconType } from 'react-icons'
import {
  FaBomb,
  FaFire,
  FaLaugh,
  FaBook,
  FaSadCry,
  FaMagic,
  FaMusic,
  FaUserSecret,
  FaHeart,
  FaReact,
  FaNewspaper,
  FaCamera,
  FaSoap,
  FaVolumeUp
} from 'react-icons/fa'
import {
  GiPistolGun,
  GiFlexibleLamp,
  GiPumpkinMask,
  GiTank,
  GiWesternHat
} from 'react-icons/gi'
import { MdFamilyRestroom, MdToys } from 'react-icons/md'
import { IoMdDocument } from 'react-icons/io'
import { RiClapperboardFill, RiKnifeBloodLine } from 'react-icons/ri'

export const icons: {
  [key: number]: IconType
} = {
  28: FaBomb, // action
  12: FaFire, // adventure
  16: GiFlexibleLamp, // animation,
  35: FaLaugh, // comedy
  80: GiPistolGun, // crime
  99: IoMdDocument, // documentary
  18: FaSadCry, // drama
  10751: MdFamilyRestroom, // family
  14: FaMagic, // fantasy
  36: FaBook, // history
  27: GiPumpkinMask, // horror
  10402: FaMusic, // music
  9648: FaUserSecret, // mystery
  10749: FaHeart, // romance
  878: FaReact, // science fiction
  10770: RiClapperboardFill, // tv movie
  53: RiKnifeBloodLine, // thriller
  10752: GiTank, // war
  37: GiWesternHat, // western
  10762: MdToys, // kids
  10763: FaNewspaper, // action & adventure
  10764: FaCamera, // reality
  10765: FaReact, // sci-fi & fantasy
  10766: FaSoap, // soap
  10767: FaVolumeUp, // talk
  10768: GiTank, // war & politics
  10759: FaBomb // adventure & action
}
