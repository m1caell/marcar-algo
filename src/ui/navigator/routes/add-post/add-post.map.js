import React from 'react'

import { ADD_POST_ROUTES } from './add-post.route'

import { AddPostScreen } from '@ui/screens/add-post'
import { Header } from '@ui/components'

export const AddPostRoutes = {
  [ADD_POST_ROUTES.ADD_POST]: {
    screen: AddPostScreen,
    navigationOptions: {
      header: <Header textHeader="Cadastro"/>
    },
  },
}
