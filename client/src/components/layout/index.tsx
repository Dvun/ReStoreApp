import React, {FC} from 'react'
import './styles.scss'


const Layout: FC = ({children}) => {

  return (
    <div className='hero is-fullheight-with-navbar container'>
      {children}
    </div>
  )
}

export default Layout