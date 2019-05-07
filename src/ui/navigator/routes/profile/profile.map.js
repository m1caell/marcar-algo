import React from 'react'

import { PROFILE_ROUTES } from './profile.route'

import { ProfileScreen } from '@ui/screens/profile'
import { Header } from '@ui/components'

export const ProfileRoutes = {
  [PROFILE_ROUTES.PROFILE]: {
    screen: ProfileScreen,
    navigationOptions: {
      header: <Header textHeader="Perfil"/>
    },
  }
}