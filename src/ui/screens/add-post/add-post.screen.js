import React, {Fragment} from 'react'
import { Text, View, ScrollView, TextInput, TouchableHighlight, Image } from 'react-native'
import { styles } from './add-post.style'
import { BaseScreen } from '@ui/screens/base'
import { Input } from '@ui/components'

export class AddPostScreen extends BaseScreen {
  constructor() {
    super()
    this.state = {
      title: 'TITLE',
      description: '',
      date: '01/01/2019',
      numPeople: 1
    }
  }

  _onChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  _increasesNumPeople = () => {
    this.setState({
      numPeople : this.state.numPeople + 1
    })
  }

  _decreasesNumPeople = () => {
    if(this.state.numPeople > 0) {
      this.setState({
        numPeople: this.state.numPeople - 1
      })
    }
  }
  
  _renderForm() {
    return (
      <View style={styles.container} >
        <View style={styles.fieldTitle}>
          <Text style={styles.title}>Informações</Text>
        </View>
        <Input
          name='title'
          placeholder='Título'
          onChangeText={(text) => this._onChange('title', text)}
          value={this.state.title}
        />
        <TextInput
          multiline={true}
          name='description'
          placeholder='Descrição'
          style={styles.description}
          onChangeText={(text) => this._onChange('description', text)}
          value={this.state.description}
        />
        <Input
          name='date'
          placeholder='dd/mm/aaaa'
          type='date'
          dateFormat="dd/mm/yyyy"
          onChangeText={(text) => this._onChange('date', text)}
          value={this.state.date}
        />
        <View style={styles.fieldTitle}>
          <Text style={styles.title}>Número de pessoas</Text>
        </View>
        <View style={styles.numPeopleContainer}>
          <TouchableHighlight onPress={this._decreasesNumPeople} style={styles.numPeople}>
            <Text style={styles.title}> - </Text>
          </TouchableHighlight>
          <Text style={styles.title}> {this.state.numPeople} </Text>
          <TouchableHighlight onPress={this._increasesNumPeople} style={styles.numPeople}>
            <Text style={styles.title}> + </Text>
          </TouchableHighlight>
        </View>
        <View>
          <View style={styles.imageMenuContainer}>
            <Text style={styles.title}> Imagem </Text>
            <TouchableHighlight>
              <View style={styles.imageMenuSelect}>
                <Text style={styles.imageMenuText}>
                  Selecionar imagem
                </Text>
                <View style={styles.imageMenuIcon} rotation={45}/>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }

  _renderPostPreview = () => {
    return (
      <Fragment>
        <View style={styles.imagePreview}>
          <Image style={styles.imagePreview} source={require('@img/aula2.png')}></Image>
        </View>
        <View style={styles.titleContainerPreview}>
          <Text style={styles.titlePreview}>{this.state.title}</Text>
        </View>
        <View style={styles.dateContainerPreview}>
          <Text style={styles.datePreview}>{this.state.date}</Text>
        </View>
        <View style={styles.numPeoplePreviewContainer}>
          <Text style={styles.numPeoplePreview}>1/{this.state.numPeople}</Text>
        </View>
      </Fragment>
    )
  }

  renderContent() {
    return (
      <ScrollView >
        {this._renderForm()}
        {this._renderPostPreview()}
      </ScrollView>
    )
  }
}
