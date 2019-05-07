import React from 'react'
import { Text, ScrollView, View, TextInput } from 'react-native'
import { styles } from './history-post.style'
import { BaseScreen } from '@ui/screens/base'
import { PostService } from '@api'
import { Post } from './post.component'

export class HistoryPostScreen extends BaseScreen {
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

  _renderPosts = () => {
    if (!this.state.apiPosts) {
      return (
        <View>
          <Text>Sem posts para exibir!</Text>
        </View>
      )
    }

    return this.state.apiPosts.map((post, index) => {
      return <Post key={index} post={post} />
    })
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Buscar"
            onChangeText={search => this.setState({ search })}
          />
        </View>
        <View style={styles.screenDescription}>
          <Text style={styles.title}>Eventos passados</Text>
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
