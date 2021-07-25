import React from 'react'
import { useContext } from './Context'
import { isEmpty } from 'lodash'
import { Alert, ShowIf } from '../../../web-ui'

export const ErrorDisplay = () => {
  const { error } = useContext()

  return (
    <ShowIf condition={!isEmpty(error)}>
      <Alert>
        Please correct the following error:
        <small>
          <ul>
            <li>Fuck</li>
            <li>Fuck</li>
          </ul>
        </small>
      </Alert>
    </ShowIf>
  )
}
