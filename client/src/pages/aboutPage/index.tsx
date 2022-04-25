import React from 'react'
import {useAppDispatch, useAppSelector} from '../../utils/hooks'
import ErrorActions from '../../redux/errorSlice/errorActions'

const AboutPage = () => {
  const dispatch = useAppDispatch()
  const {isLoading, notFoundError, badRequestError, server500Error, unauthorizedError, validationError} = useAppSelector(state => state.errorSlice)

  return (
    <div>
      <h1 className='title mb-6'>About Page</h1>

      <div className='field is-grouped buttons is-justify-content-center'>
        <button type='button' className='button is-info mb-6' onClick={() => dispatch(ErrorActions.NotFoundError())}>NotFound Error</button>
        <button type='button' className='button is-info mb-6' onClick={() => dispatch(ErrorActions.BadRequestError())}>BadRequest Error</button>
        <button type='button' className='button is-info mb-6' onClick={() => dispatch(ErrorActions.Server500Error())}>Server 500 Error</button>
        <button type='button' className='button is-info mb-6' onClick={() => dispatch(ErrorActions.UnauthorizedError())}>Unauthorized Error</button>
        <button type='button' className='button is-info mb-6' onClick={() => dispatch(ErrorActions.ValidationError())}>Validation Error</button>
      </div>

      {isLoading && <h3 className='title has-text-centered'>Loading...</h3>}
      <div>
        {notFoundError && JSON.stringify(notFoundError)}
        {badRequestError && JSON.stringify(badRequestError)}
        {server500Error && JSON.stringify(server500Error)}
        {unauthorizedError && JSON.stringify(unauthorizedError)}
        {validationError && JSON.stringify(validationError)}
      </div>
    </div>
  )
}

export default AboutPage