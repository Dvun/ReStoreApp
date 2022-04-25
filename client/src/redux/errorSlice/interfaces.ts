interface IBaseErrorFields {
  type: string
  title: string
  status: number
  traceId: string
}

interface IErrors {
  problem: IProblemErrors[]
}

interface IProblemErrors {
  detail: string
}

export interface INotFoundError extends IBaseErrorFields {
}

export interface IUnauthorizedError extends IBaseErrorFields {
}

export interface IBadRequestError {
  title: string
  status: number
}

export interface IServer500Error {
  title: string
  status: number
  detail: string
}


export interface IValidationError extends INotFoundError {
  errors: IErrors
}

export interface IInitialState {
  notFoundError: INotFoundError | null
  unauthorizedError: IUnauthorizedError | null
  badRequestError: IBadRequestError | null
  server500Error: IServer500Error | null
  validationError: IValidationError | null
  isLoading: boolean
  isError: string | null
}