import React, { useState } from 'react'

import { handleSignUp, handleSignIn, handleSignOut } from '../../adapters/FirebaseAuthAdapater'

import useStyles from './style'

export const SignOn = () => {

  const classes = useStyles()

  const [newUser, setNewUser] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // TODO: convert to material-ui

  const signOn = function(e, p, cp) {
    if (newUser) {
      if (password === confirmPassword) {
        handleSignUp(e, p)
      } else {
        // TODO
        console.log("Passwords don't match")
      }
    } else {
      handleSignIn(e, p)
    }
  }

  return (
    <div>
      <h1>{newUser ? 'Sign Up': 'Sign In'}</h1>
      <label>
        Email
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => {setEmail(e.target.value)}}
        />
      </label>
      <label>
        Password
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => {setPassword(e.target.value)}}
        />
      </label>
      {
        newUser && (
          <label>
            Confirm Password
            <input
              type='password'
              placeholder='Password'
              value={confirmPassword}
              onChange={e => {setConfirmPassword(e.target.value)}}
            />
          </label>
        )
      }
      <button
        onClick={() => signOn(email, password, confirmPassword)}
      >
        {newUser ? 'Sign Up': 'Sign In'}
      </button>
      <p>
        {newUser ? 'Already have an account? ' : 'Don\'t have an account? '}
        <a onClick={() => setNewUser(prev => !prev)}>{newUser ? 'Sign In': 'Sign Up'}</a>
      </p>
    </div>
  )
}

export const SignOut = () => {
  return (
    <button
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  )
}
