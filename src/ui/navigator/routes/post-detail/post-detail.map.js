import React from 'react'

import { POST_DETAIL_ROUTES } from './post-detail.route'

import { PostDetailScreen } from '@ui/screens/post-detail'
import { Header } from '@ui/components'

export const PostDetailRoutes = {
  [POST_DETAIL_ROUTES.POST_DETAIL]: {
    screen: PostDetailScreen,
    navigationOptions: {
      header: <Header textHeader="Detalhes"/>
    },
  },
}
