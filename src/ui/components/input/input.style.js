import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    textFields: {
        width: WIDTH * 0.8,
        height: 50,
        marginVertical: 10, 
        paddingHorizontal: 20,
        borderWidth: 0.25,
        borderColor: '#979797',
        borderRadius: 4,
        backgroundColor: "#FAFAFA"
    }
})