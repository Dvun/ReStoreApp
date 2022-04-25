import React, {FC, useEffect, useState} from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'
import useViewPort from '../../utils/viewPort'
import NavbarEnd from './navbarEnd'
import NavbarStart from './navbarStart'

const Navbar: FC = () => {
  const viewPort = useViewPort()
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (viewPort !== 'mobile' && viewPort !== 'tablet') setIsActive(false)
  }, [viewPort])


  return (
    <nav
      className={`navbar is-dark is-spaced pt-0 pb-0 ${viewPort === 'mobile' || viewPort === 'tablet' ? 'is-fixed-top' : ''}`}>
      <div className="navbar-brand">
        <Link className="navbar-item logo" to="/">
          <h1 className="title is-size-4-mobile">ReStore</h1>
        </Link>
        {
          viewPort === 'mobile' || viewPort === 'tablet' ?
            <div
              role="button"
              className={`navbar-burger ${isActive ? 'is-active' : ''}`}
              onClick={() => setIsActive(prevState => !prevState)}
            >
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </div>
            :
            null
        }
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <NavbarStart setIsActive={setIsActive}/>
        <NavbarEnd setIsActive={setIsActive}/>
      </div>
    </nav>
  )
}

export default Navbar