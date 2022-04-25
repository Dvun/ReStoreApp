import React, {FC} from 'react'
import useViewPort from '../../../utils/viewPort'
import MobileMenu from './mobileMenu'
import DesktopMenu from './desktopMenu'

interface Props {
  setIsActive: (bool: boolean) => void
}

const NavbarEnd: FC<Props> = ({setIsActive}) => {
  const viewPort = useViewPort()
  const user = false

  return (
    <div className="navbar-end">
      {
        viewPort === 'mobile' || viewPort === 'tablet' ?
          <MobileMenu user={user} setIsActive={setIsActive}/>
          :
          <DesktopMenu user={user} setIsActive={setIsActive}/>
      }
    </div>
  )
}

export default NavbarEnd