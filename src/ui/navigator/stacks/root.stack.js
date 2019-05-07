import { createStackNavigator } from 'react-navigation'
import { RootTabBar } from '@ui/navigator/tabbar'

export const RootStack = createStackNavigator({
  RootTabBar: {
    screen: RootTabBar,
    navigationOptions: {
      header: null,
    },
  },
})
