import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#000E15",
        height: "100%",
        padding: 20
    },
    postTitle: {
        backgroundColor: '#2D3F48',
        borderWidth: 2,
        fontSize: 30,
        borderRadius: 30,
        color: 'white',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        height: 67,
        alignSelf: 'center',
    },
    postDescription: {
        backgroundColor: '#2D3F48',
        borderWidth: 2,
        fontSize: 30,
        borderRadius: 30,
        color: 'white',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        height: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    postPhotoButton: {
        backgroundColor: '#2D3F48',
        borderRadius: 30,
        padding: 10,
        width: "100%",
        height: 67,
        alignSelf: 'center',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    postPhotoButtonIcon: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: 10
    },
    postPhotoButtonText: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: 20,
        fontSize: 20,
        color: "#878787"
    },
    postCreateButton: {
        backgroundColor: "blue",
        padding: 10,
        width: "100%",
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 15
    },
    postCreateButtonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25
    }
})

export default styles;