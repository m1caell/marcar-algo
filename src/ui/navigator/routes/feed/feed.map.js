import React from 'react'

import { FEED_ROUTES } from './feed.route'

import { FeedScreen } from '@ui/screens/feed'
import { PostDetailScreen } from '@ui/screens/post-detail'
import { Header } from '@ui/components/header'

export const FeedRoutes = {
  [FEED_ROUTES.FEED]: {
    screen: FeedScreen,
    navigationOptions: {
      header: null
    },
  },
  [FEED_ROUTES.POST_DETAIL]: {
    screen: PostDetailScreen,
    navigationOptions: {
      header: <Header textHeader="Detalhes"/>
    },
  },
}