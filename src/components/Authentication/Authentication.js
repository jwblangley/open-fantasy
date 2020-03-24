import React, { useState } from 'react'

import {
  Input,
  Button,
  Typography,
  Grid
} from '@material-ui/core'

import { handleSignUp, handleSignIn, handleSignOut } from '../../adapters/FirebaseAuthAdapater'

import useStyles from './style'

export const SignOn = () => {

  const classes = useStyles()

  const [newUser, setNewUser] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
    <Grid
      container
      spacing={3}
      alignItems="center"
      justify="center"
      className={classes.signInContainer}
    >
      <Grid item xs={12} className={classes.signInItem}>
        <Typography variant='h3'>{newUser ? 'Sign Up': 'Sign In'}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.signInItem}>
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => {setEmail(e.target.value)}}
        />
      </Grid>
      <Grid item xs={12} className={classes.signInItem}>
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => {setPassword(e.target.value)}}
        />
      </Grid>
      {
        newUser && (
          <Grid item xs={12} className={classes.signInItem}>
            <Input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={e => {setConfirmPassword(e.target.value)}}
            />
          </Grid>
        )
      }
      <Grid item xs={12} className={classes.signInItem}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => signOn(email, password, confirmPassword)}
        >
          {newUser ? 'Sign Up': 'Sign In'}
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.signInItem}>
        <Typography>
          {newUser ? 'Already have an account? ' : 'Don\'t have an account? '}
          <a style={{cursor:'pointer', fontWeight:'bold'}}onClick={() => setNewUser(prev => !prev)}>{newUser ? 'Sign In': 'Sign Up'}</a>
        </Typography>
      </Grid>
    </Grid>
  )
}

export const SignOut = () => {
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  )
}
