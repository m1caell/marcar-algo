import React, { PureComponent } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { getDateFormated } from '@util'
import { styles } from './history-event.style'

export class HistoryEventSection extends PureComponent {
  constructor() {
    super()
    this.state = {
      currentEvents: null,
    }
  }

  componentDidMount() {
    this.setState({
      currentEvents: [
        {
          id: '1',
          title: 'International Program Consultant',
          image: 'http://lorempixel.com/640/480/transport',
          date_event: '2020-01-28T01:14:41.483Z',
          num_participants: 20985,
          total_participants: 1989,
          description:
            'If we compress the microchip, we can get to the ADP bandwidth through the virtual HTTP transmitter!',
        },
        {
          id: '2',
          title: 'Lead Group Liaison',
          image: 'http://lorempixel.com/640/480/transport',
          date_event: '2019-12-31T11:35:30.294Z',
          num_participants: 58203,
          total_participants: 42180,
          description: 'The EXE sensor is down, parse the online pixel so we can back up the AGP driver!',
        },
        {
          id: '3',
          title: 'Dynamic Intranet Liaison',
          image: 'http://lorempixel.com/640/480/cats',
          date_event: '2019-11-25T17:55:41.056Z',
          num_participants: 57828,
          total_participants: 64795,
          description: "You can't calculate the array without connecting the 1080p SCSI microchip!",
        },
        {
          id: '4',
          title: 'Dynamic Intranet Liaison',
          image: 'http://lorempixel.com/640/480/cats',
          date_event: '2019-11-25T17:55:41.056Z',
          num_participants: 57828,
          total_participants: 64795,
          description: "You can't calculate the array without connecting the 1080p SCSI microchip!",
        },
        {
          id: '5',
          title: 'Dynamic Intranet Liaison',
          image: 'http://lorempixel.com/640/480/cats',
          date_event: '2019-11-25T17:55:41.056Z',
          num_participants: 57828,
          total_participants: 64795,
          description: "You can't calculate the array without connecting the 1080p SCSI microchip!",
        },
      ],
    })
  }

  _renderPosts = () => {
    if (!this.state.currentEvents) return

    return this.state.currentEvents.map((post, index) => {
      return (
        <View key={index} style={styles.row}>
          <Image source={{ uri: post.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.date}>{getDateFormated(post.date_event)}</Text>
          </View>
        </View>
      )
    })
  }

  render() {
    return <ScrollView>{this._renderPosts()}</ScrollView>
  }
}
