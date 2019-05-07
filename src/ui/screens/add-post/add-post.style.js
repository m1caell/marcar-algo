import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: WIDTH * 0.1,
        display: 'flex',
        backgroundColor: 'white'
    },
    fieldTitle: {
        paddingTop: 50
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    description: {
        height: 200,
        width: WIDTH * 0.8,
        marginVertical: 10, 
        paddingHorizontal: 20,
        borderWidth: 0.25,
        borderColor: '#979797',
        borderRadius: 4,
        backgroundColor: "#FAFAFA",
        textAlignVertical: 'top'
    },
    numPeopleContainer: {
        marginTop: 10,
        height: 50,
        display: 'flex',
        flexDirection: 'row'
    },
    numPeople: {
        height: 40,
        width: 50,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: '#FBB041',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageMenuContainer: {
        paddingTop: 50,
        paddingRight: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageMenuText: {
        position: 'relative',
        letterSpacing: 0.2,
        fontSize: 15
    },
    imageMenuIcon: {
        position: 'absolute',
        width: 13,
        height: 13,
        borderTopWidth: 2,
        borderRightWidth: 2,
        top: 6,
        right: -13,
        borderColor: '#FBB041'
    },
    imagePreview: {
        position: 'relative',
        width: WIDTH,
        height: WIDTH
    },
    titleContainerPreview: {
        position: 'absolute',
        width: WIDTH,
        bottom: WIDTH - 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlePreview: {
        fontSize: 28,
        color: 'white'
    },
    numPeoplePreviewContainer: {
        position: 'absolute',
        bottom: 20,
        right: 5
    },
    numPeoplePreview: {
        fontSize: 20,
        color: 'white'
    },
    dateContainerPreview: {
        position: 'absolute',
        bottom: 20,
        left: 5
    },
    datePreview: {
        fontSize: 20,
        color: 'white'
    }
})
