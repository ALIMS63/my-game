import { Paper, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  const [value, setValue] = useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

  return (
    <Paper square>
      <Tabs indicatorColor='primary' textColor='primary'>
        {!isAuthenticated && (
          <Link to='/login'>
            <Tab label='Login' />
          </Link>
        )}
        {!isAuthenticated && (
          <Link to='/registration'>
            <Tab label='Registration' />
          </Link>
        )}
        {isAuthenticated && (
          <Link to='/logout'>
            <Tab label='Logout' />
          </Link>
        )}
        {isAuthenticated && (
          <Link to='/personalPage'>
            <Tab label='Personal Page' />
          </Link>
        )}
        {isAuthenticated && (
          <Link to='/gameCard'>
            <Tab label='Game' />
          </Link>
        )}
      </Tabs>
    </Paper>
  )
}
