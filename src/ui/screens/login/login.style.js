import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  flexCenter: {
    paddingTop: WIDTH * 0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#FBB041',
    borderRadius: 90,
    borderWidth: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    paddingTop: 10,
    marginTop: 10
  },
  fieldContainer: {
    marginTop: 60
  },
  textRegular: {
    color: "white",
    fontSize: 20
  },
  header: {
    marginBottom: 40,
    color: "white"
  },
  emptyField: {
    color: 'red',
    height: 30,
    width: WIDTH * 0.8
  },
  logo: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 50
  },
  textFields: {
    width: WIDTH * 0.8,
    height: 60,
    marginVertical: 10, 
    fontSize: 15,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 0.25,
    borderColor: '#979797',
    backgroundColor: '#FAFAFA'
  },
  loginButtonContainer:{
    width: WIDTH * 0.8,
    height: 60,
    marginVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#6FCF97"
  },
  buttonStyle: {
    color: 'white', 
    fontSize: 20
  }
})
