import React, {FC} from 'react'
import {Navigate, Outlet} from 'react-router-dom'

interface Props {
  user: boolean
}

const PrivateRoutes: FC<Props> = ({user}) => {
  return user ? <Outlet/> : <Navigate to={user ? '/' : '/login'} replace/>
}

export default PrivateRoutes