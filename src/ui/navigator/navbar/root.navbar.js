import { createStackNavigator } from 'react-navigation'

import { LoginStack } from '@ui/navigator/stacks/login'

export const RootNavBar = createStackNavigator({
    LoginStack: {
        screen: LoginStack
    }
})
