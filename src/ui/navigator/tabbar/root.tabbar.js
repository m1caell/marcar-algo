import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { FeedStack } from '@ui/navigator/stacks/feed'
import { AddPostStack } from '@ui/navigator/stacks/add-post'
import { HistoryPostStack } from '@ui/navigator/stacks/history-post'
import { ProfileStack } from '@ui/navigator/stacks/profile'
import { IgIcon } from '@ui/components/IgIcon'

export const RootTabBar = createBottomTabNavigator(
  {
    FeedStack: {
      screen: FeedStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <IgIcon name="home" style={{ fontSize: 25, color: tintColor}} />,
      },
    },
    AddPostStack: {
      screen: AddPostStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <IgIcon name="plus" style={{ fontSize: 25, color: tintColor }} />,
      },
    },
    HistoryPostStack: {
      screen: HistoryPostStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <IgIcon name="history" style={{ fontSize: 25, color: tintColor }} />,
      },
    },
    ProfileStack: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <IgIcon name="user" style={{ fontSize: 25, color: tintColor }} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FBB041',
      inactiveTintColor: '#000000',
      showLabel: false
    },
  },
)
