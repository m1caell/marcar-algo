import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingRight: 10,
    flexWrap: 'wrap',
  },
  secondTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  totalParticipants: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBB041',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
  },
  numbers: {
    fontSize: 14,
    color: '#ffffff',
  },
  description: {
    flex: 1,
    marginVertical: 20,
  },
  dateSection: {
    height: 40,
  },
  button: {
    height: 50,
    marginTop: 15,
    paddingHorizontal: 20,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6FCF97',
  },
})
