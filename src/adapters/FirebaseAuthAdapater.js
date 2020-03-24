import React, {useEffect, useState} from 'react'

import app from './firebaseApp'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(user => setCurrentUser(user ? {
      email: user.email
    } : null))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const handleSignIn = async (email, password, errCb) => {
  const errors = {
    'auth/invalid-email': 'Please enter a valid email address',
    'auth/user-disabled': 'User has been disabled',
    'auth/user-not-found': 'Invalid email and password',
    'auth/wrong-password': 'Invalid email and password'
  }

  try {
    await app
      .auth()
      .signInWithEmailAndPassword(email, password)
  } catch(err) {
    if (err.code in errors) {
      errCb(errors[err.code])
    } else {
      errCb('An error occured - please try again')
    }
  }
}

export const handleSignUp = async (email, password, errCb) => {
  const errors = {
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please enter a valid email address',
    'auth/weak-password': 'Invalid password - not strong enough'
  }

  try {
    await app
      .auth()
      .createUserWithEmailAndPassword(email, password)
  } catch(err) {
    if (err.code in errors) {
      errCb(errors[err.code])
    } else {
      errCb('An error occured - please try again')
    }
  }
}

export const handleSignOut = () => {
  app.auth().signOut()
}
