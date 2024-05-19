import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000E15',
        height: '100%',
        margin: 0
    },
    header_image: {
        width: 500,
        resizeMode: 'cover',
        height: 300,
    },
    title: {
        textAlign: 'center',
        fontSize: 48,
        marginTop: 10,
        color: 'white',
        fontFamily: 'Arial'
    },
    login_button: {
        backgroundColor: '#1C5BFF',
        borderRadius: 15,
        width: 170,
        padding: 15,
        alignSelf: 'center',
        marginTop: 20
    },
    button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#2D3F48',
        borderWidth: 2,
        fontSize: 30,
        borderRadius: 30,
        color: 'white',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: 350,
        height: 87,
        alignSelf: 'center',
        marginTop: 20
    },
    login_status: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 20
    },
    bottom_text: {
        textAlign: 'center',
        marginTop: 20,
        color: 'white'
    },
    create_account_text: {
        color: '#1C5BFF',
        textDecorationLine: 'underline'
    }
});

export default styles;