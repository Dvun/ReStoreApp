import React, {FC} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faRightFromBracket, faRightToBracket} from '@fortawesome/free-solid-svg-icons'

interface Props {
  user: boolean
  setIsActive: (bool: boolean) => void
}

const MobileMenu: FC<Props> = ({user, setIsActive}) => {
  return (
    user ?
      <>
        <hr className="dropdown-divider"/>
        <NavLink className="navbar-item shopping-basket-mobile" to="/shopping-cart" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faCartShopping} className="pr-2"/>
          Basket
          <span>4</span>
        </NavLink>
        <Link className="navbar-item logout pl-4" to="/logout" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faRightFromBracket} className="pr-2"/>
          Logout
        </Link>
      </>
      :
      <>
        <hr className="dropdown-divider"/>
        <NavLink className="navbar-item shopping-basket-mobile" to="/shopping-cart" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faCartShopping} className="pr-2"/>
          Basket
          <span>4</span>
        </NavLink>
        <NavLink className="navbar-item" to="/login" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faRightToBracket} className="pr-2"/>
          Login
        </NavLink>
        <NavLink className="navbar-item" to="/register" onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faRightToBracket} className="pr-2"/>
          Register
        </NavLink>
      </>
  )
}

export default MobileMenu