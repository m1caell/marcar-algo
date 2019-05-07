import React, { Fragment } from 'react'
import { Text, View, ScrollView, TextInput, TouchableHighlight, Image } from 'react-native'
import { styles } from './add-post.style'
import { BaseScreen } from '@ui/screens/base'
import { Input, Camera } from '@ui/components'

export class AddPostScreen extends BaseScreen {
  constructor() {
    super()
    this.state = {
      title: 'TITLE',
      description: '',
      date: '01/01/2019',
      numPeople: 1,
      openCam: false,
      urlImage: 'https://lorempixel.com/640/480/transport',
    }
  }

  _onChange = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  _increasesNumPeople = () => {
    this.setState({
      numPeople: this.state.numPeople + 1,
    })
  }

  _decreasesNumPeople = () => {
    if (this.state.numPeople > 0) {
      this.setState({
        numPeople: this.state.numPeople - 1,
      })
    }
  }

  _openCamera = () => {
    this.setState({ openCam: true })
  }

  savePhoto = async data => {
    this.setState({ openCam: false, urlImage: data })
  }

  _renderCamera() {
    return <Camera savePhoto={this.savePhoto} />
  }

  _renderForm() {
    return (
      <View style={styles.container}>
        <View style={styles.fieldTitle}>
          <Text style={styles.title}>Informações</Text>
        </View>
        <Input
          style={styles.textFields}
          name="title"
          placeholder="Título"
          onChangeText={text => this._onChange('title', text)}
          value={this.state.title}
        />
        <TextInput
          multiline={true}
          name="description"
          placeholder="Descrição"
          style={styles.description}
          onChangeText={text => this._onChange('description', text)}
          value={this.state.description}
        />
        <Input
          style={styles.textFields}
          name="date"
          placeholder="dd/mm/aaaa"
          type="date"
          dateFormat="dd/mm/yyyy"
          onChangeText={text => this._onChange('date', text)}
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
          <TouchableHighlight onPress={this._openCamera}>
            <View style={styles.imageMenuContainer}>
              <Text style={styles.title}>Imagem</Text>
              <View style={styles.imageMenuSelect}>
                <Text style={styles.imageMenuText}>Selecionar imagem</Text>
                <View style={styles.imageMenuIcon} rotation={45} />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  _renderPostPreview = () => {
    return (
      <Fragment>
        <View style={styles.imagePreview}>
          <Image style={styles.imagePreview} source={{ uri: this.state.urlImage }} />
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

  _save() {}

  renderContent() {
    const { openCam } = this.state

    if (openCam) {
      return this._renderCamera()
    }

    return (
      <ScrollView>
        {this._renderForm()}
        {this._renderPostPreview()}
        <View style={{flex:1, display:'flex', alignItems: 'center'}}>
          <TouchableHighlight onPress={this._save} style={styles.saveBtn}>
            <Text style={{ color: 'white', fontSize: 20 }}>Salvar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}
