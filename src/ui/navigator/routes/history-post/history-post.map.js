import React from 'react'

import { HISTORY_POST_ROUTES } from './history-post.route'

import { HistoryPostScreen } from '@ui/screens/history-post'
import { Header } from '@ui/components'

export const HistoryPostRoutes = {
  [HISTORY_POST_ROUTES.HISTORY_POST]: {
    screen: HistoryPostScreen,
    navigationOptions: {
      header: <Header textHeader="Marcar Algo"/>
    },
  }
}