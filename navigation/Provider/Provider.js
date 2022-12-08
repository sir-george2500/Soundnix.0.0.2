import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from '../../auth/AuthProvider'

import AuthRoute from '../AuthRoute'


 export const Provider = () => {
  return (
    
    <AuthProvider>
    <AuthRoute/>
  </AuthProvider>
  )
}

