import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainPage: {
        height: '100%',
        backgroundColor: "#000E15"
    },
    logo: {
        width: 80,
        resizeMode: 'contain',
        height: 50,
        marginLeft: 20,
        marginBottom: 5,
        marginTop: 5
    },
    topNav: {
        backgroundColor: '#000E15',
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity:  0.2,
        shadowRadius: 30,
        elevation: 4,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        display: "flex",
        justifyContent: 'center',
        justifyDirection: 'row',
        flexDirection: 'row',
        backgroundColor: '#000E15',
        borderTopColor: '#2b3f49',
        borderTopWidth: 1,
        width: '100%',
        alignSelf: 'center',
        paddingBottom: 50,
        paddingTop: 20
    },
    bottomNavChildren: {
        display: 'block',
        width: 50,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
        color: 'white'
    },
    addToStory: {
        backgroundColor: '#233843',
        borderRadius: 33,
        width: 110,
        height: 150,
        padding: 15,
        margin: 10
    },
    storyPlusIcon: {
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    storyAddText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        color: 'white'
    },
    profileButton: {
        width: 30,
        height: 30,
        marginRight: 20,
        borderRadius: 50
    },
    postButton: {
        width: 30,
        height: 30,
        marginRight: 20,
        borderRadius: 50
    },
    topNavButtons: {
        alignSelf: 'flex-end',
        marginTop: 'auto',
        marginBottom: 'auto',
        display: 'flex',
        flexDirection: 'row'
    }
})

export default styles;