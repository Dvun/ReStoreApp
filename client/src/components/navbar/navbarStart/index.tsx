import React, {FC} from 'react'
import './styles.scss'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faPeopleGroup, faPhone} from '@fortawesome/free-solid-svg-icons'
import {INavbarStartItems} from '../../../interfaces/interfaces'

const navbarStartItems: INavbarStartItems[] = [
  {id: 1, label: 'Home', icon: faHouse, path: '/'},
  {id: 2, label: 'About', icon: faPeopleGroup, path: '/about'},
  {id: 3, label: 'Contact', icon: faPhone, path: '/contact'}
]

interface Props {
  setIsActive: (bool: boolean) => void
}

const NavbarStart: FC<Props> = ({setIsActive}) => {
  return (
    <div className="navbar-start">
      {
        navbarStartItems.map(item => (
          <NavLink key={item.id} className="navbar-item" to={item.path} onClick={() => setIsActive(false)}>
            <FontAwesomeIcon icon={item.icon} className="pr-2"/>
            {item.label}
          </NavLink>
        ))
      }
    </div>
  )
}

export default NavbarStart