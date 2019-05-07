import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#FAFAFA'
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FAFAFA'
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 158,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 25,
  },
  info: {
    flex: 1,
  },
  infoContainer: {
    justifyContent: 'center'
  },
  name: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
  },
  button: {
    marginTop: 20,
    color: '#FF0000',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
})
