import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    display: 'flex',
    backgroundColor: 'white',
  },
  fieldTitle: {
    paddingTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    height: 200,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.25,
    borderColor: '#979797',
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
    textAlignVertical: 'top',
  },
  numPeopleContainer: {
    marginTop: 10,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  numPeople: {
    height: 40,
    width: 50,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#FBB041',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageMenuSelect: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageMenuText: {
    fontSize: 15,
  },
  imageMenuIcon: {
    top: 2.5,
    width: 13,
    height: 13,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#FBB041',
  },
  imagePreview: {
    position: 'relative',
    width: WIDTH,
    height: WIDTH,
  },
  titleContainerPreview: {
    position: 'absolute',
    width: WIDTH,
    bottom: WIDTH - 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlePreview: {
    fontSize: 28,
    color: 'white',
  },
  numPeoplePreviewContainer: {
    position: 'absolute',
    bottom: 20,
    right: 5,
  },
  numPeoplePreview: {
    fontSize: 20,
    color: 'white',
  },
  dateContainerPreview: {
    position: 'absolute',
    bottom: 20,
    left: 5,
  },
  datePreview: {
    fontSize: 20,
    color: 'white',
  },
  textFields: {
    height: 60,
    marginVertical: 10,
    fontSize: 15,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 0.25,
    borderColor: '#979797',
    backgroundColor: '#FAFAFA',
  },
  saveBtn: {
    flex: 1,
    width: WIDTH * 0.8,
    height: 60,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6FCF97',
  },
})
