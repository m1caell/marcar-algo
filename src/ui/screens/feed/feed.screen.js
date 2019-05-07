import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { PostService } from '../../../api/post-service'
import { styles } from './feed.style'
import { BaseScreen } from '@ui/screens/base'
import { Header } from '@ui/components'
import { Post } from './post.component'

export class FeedScreen extends BaseScreen {
  constructor(props) {
    super(props)
    this.state = {
      apiPosts: null,
      search: '',
    }
    this.postService = new PostService()
  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    try {
      const data = await this.postService.getAllPosts()
      if (data.data) {
        this.setState({ apiPosts: data.data })
      }
    } catch (err) {
      console.log(err)
    }
  }

  _onPressOpenDetails = post => {
    this.props.navigation.navigate('PostDetailScreen', { data: post })
  }

  _renderPosts = () => {
    if (!this.state.apiPosts) {
      return (
        <View>
          <Text>Sem posts para exibir!</Text>
        </View>
      )
    }

    return this.state.apiPosts.map((post, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => this._onPressOpenDetails(post)}>
          <Post post={post} />
        </TouchableOpacity>
      )
    })
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <Header textHeader="Marcar Algo"/>
        <View style={styles.search}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Buscar"
            onChangeText={search => this.setState({ search })}
          />
        </View>
        <View style={styles.screenDescription}>
          <Text style={styles.title}>Eventos</Text>
          <View style={styles.eventsNumber}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
              {(this.state.apiPosts && this.state.apiPosts.length) || 0}
            </Text>
          </View>
        </View>
        <ScrollView>{this._renderPosts()}</ScrollView>
      </View>
    )
  }
}
