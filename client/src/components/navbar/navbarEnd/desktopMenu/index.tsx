import React, {FC, useState} from 'react'
import './styles.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faAngleUp,
  faCartShopping,
  faIdCard,
  faRightFromBracket,
  faRightToBracket,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'

interface Props {
  user: boolean
  setIsActive: (bool: boolean) => void
}

const DesktopMenu: FC<Props> = ({user, setIsActive}) => {
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false)

  return (
    user ?
      <>
        <NavLink className="navbar-item shopping-basket pl-4" to="/shopping-cart" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faCartShopping} className="pr-2" width='50'/>
          <span>4</span>
        </NavLink>
        <div
          onMouseMove={() => setOpenSubMenu(false)}
          onMouseLeave={() => setOpenSubMenu(true)}
          className="dropdown is-hoverable"
        >
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>
            <FontAwesomeIcon icon={faUser} className="pr-3"/>
            Roman Seveljov
            <FontAwesomeIcon icon={openSubMenu ? faAngleUp : faAngleDown} className="pl-3"/>
          </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <NavLink className="navbar-item" to="/profile" onClick={() => setIsActive(false)}>
                  <FontAwesomeIcon icon={faIdCard} className="pr-2"/>
                  Profile
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Link className="navbar-item logout pl-4" to="/logout" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faRightFromBracket} className="pr-2"/>
          Logout
        </Link>
      </>
      :
      <>
        <NavLink className="navbar-item shopping-basket pl-4" to="/shopping-cart" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faCartShopping} className="pr-2" width='50'/>
          <span>4</span>
        </NavLink>
        <NavLink className="navbar-item logout pl-4" to="/login" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faRightToBracket} className="pr-2"/>
          Login
        </NavLink>
        <NavLink className="navbar-item logout pl-4" to="/register" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faRightToBracket} className="pr-2"/>
          Register
        </NavLink>
      </>
  )
}

export default DesktopMenu