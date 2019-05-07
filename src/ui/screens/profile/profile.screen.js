import React from 'react'
import { Text, View, Image, Button, Dimensions } from 'react-native'
import { BaseScreen } from '@ui/screens/base'
import { UserService } from '@api'
import { CurrentEventSection, HistoryEventSection } from './section/index'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { styles } from './profile.style'
import { IgIcon } from '@ui/components/IgIcon'

export class ProfileScreen extends BaseScreen {
  constructor() {
    super()
    this.state = {
      apiUser: null,
      index: 0,
      routes: [{ key: 'first', title: '' }, { key: 'second', title: '' }],
    }

    this.userService = new UserService()
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser = async () => {
    // try {
    //   const api = await this.userService.getUserById(1)
    //   if (api.data) {
    //     this.setState({
    //       apiUser: api.data,
    //     })
    //   }
    // } catch (err) {
    //   console.error('Falha ao carregar usuário!')
    // }
    //Provisório
    this.setState({
      apiUser: {
        id: '1',
        username: 'Eino7',
        email: 'Toy75@hotmail.com',
        password: 'oqxjEByCyWBfyBx',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mylesb/128.jpg',
      },
    })
  }

  _redirectToLogin() {}

  _renderProfileInfo = () => {
    if (!this.state.apiUser) return <Text />
    const { apiUser } = this.state
    return (
      <View style={styles.profileSection}>
        <Image source={{ uri: apiUser.avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{apiUser.username}</Text>
            <Text style={styles.email}>{apiUser.email}</Text>
            <Button style={styles.button} onPress={this._redirectToLogin} title="Sair" />
          </View>
        </View>
      </View>
    )
  }

  _renderTabBarSection = () => {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: CurrentEventSection,
          second: HistoryEventSection,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
        sceneContainerStyle={{ marginVertical: 10 }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#FBB041' }}
            style={{ backgroundColor: '#fafafa' }}
            activeColor="#000000"
            inactiveColor="gray"
            renderLabel={false}
            renderIcon={({ route, focused, color }) => (
              <IgIcon name={route.key === 'first' ? 'user' : 'user-check'} style={{ fontSize: 24, color: color }} />
            )}
          />
        )}
      />
    )
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {this._renderProfileInfo()}
          {this._renderTabBarSection()}
        </View>
      </View>
    )
  }
}
