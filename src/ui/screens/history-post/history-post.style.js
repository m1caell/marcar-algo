import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    height: 33,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    margin: 10,
    borderTopColor: '#979797',
    borderBottomColor: '#979797',
    borderLeftColor: '#979797',
    borderRightColor: '#979797',
  },
  screenDescription: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  eventsNumber: {
      backgroundColor: '#FBB041',
      width: 40,
      height: 30,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
  },
  inputSearch: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
})
