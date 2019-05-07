import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import { getDateFormated } from '@util'
import LinearGradient from 'react-native-linear-gradient'
import { IgIcon } from '@ui/components/IgIcon'

export class Post extends PureComponent {
  render() {
    const { post } = this.props

    return (
      <View style={styles.card} key={post.id}>
        <LinearGradient
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.1, y: 1 }}
          locations={[0.5, 0.5, 0.5]}
          colors={['#1A1A1A', 'transparent', '#1A1A1A']}
          style={styles.effectGradiente}
          useAngle={true}
          angle={0}
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          <Image source={{ uri: post.image }} style={styles.background} />
        </LinearGradient>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.date}>{getDateFormated(post.date_event)}</Text>
        <View style={styles.participants}>
          <Text style={styles.num_participants}>{`${post.num_participants}/${post.total_participants}`}</Text>
          <IgIcon name="user" style={{ fontSize: 14, color: '#ffffff' }} />
        </View>
      </View>
    )
  }
}

const styles = {
  card: {
    flex: 1,
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  background: {
    flex: 1,
    borderRadius: 10,
    opacity: 0.6,
  },
  title: {
    position: 'absolute',
    top: 10,
    left: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  participants: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,
    right: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  effectGradiente: {
    flex: 1,
    borderRadius: 10,
    borderRadius: 5,
  },
  num_participants: {
    color: '#ffffff',
  },
}
