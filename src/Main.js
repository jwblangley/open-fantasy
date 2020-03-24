import React, { useContext } from 'react'

import useStyles from './style'
import { AuthContext } from './adapters/FirebaseAuthAdapater'

import { SignOn, SignOut } from './components/Authentication/Authentication'

const Main = () => {
  const classes = useStyles()

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="Main">
      {currentUser ? <SignOut /> : <SignOn />}
    </div>
  )
}

export default Main
