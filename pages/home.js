import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

function HomePage({ navigation }) {

    // Configure styles for header bar
    navigation.setOptions({
        headerTitle: '',
        headerStyle: {
            height: 45,
            backgroundColor: 'white',
        },
    });

    return(
        <View style={styles.mainPage}>
            <View style={styles.topNav}>
                <Image source={require('../assets/dayly-logo.png')} style={styles.logo} />
            </View>
            <ScrollView horizontal={false}>
                <Text style={styles.header}>Stories</Text>
                <ScrollView horizontal={true} style={styles.storiesContainer}>
                    <TouchableOpacity style={styles.addToStory}>
                        <Image source={require('../assets/plus-icon.png')} style={styles.storyPlusIcon} />
                        <Text style={styles.storyAddText}>Add to Story</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.bottomNavChildren}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavChildren}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainPage: {
        height: '100%'
    },
    logo: {
        width: 80,
        resizeMode: 'contain',
        height: 50,
        margin: 5
    },
    topNav: {
        backgroundColor: 'white'
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        display: "flex",
        justifyContent: 'center',
        justifyDirection: 'row',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
        paddingBottom: 50,
        paddingTop: 20
    },
    bottomNavChildren: {
        display: 'block',
        width: 50
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        margin: 10
    },
    addToStory: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        width: 90,
        padding: 10,
        margin: 10
    },
    storyPlusIcon: {
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    storyAddText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: '#575757'
    }
})

export default HomePage;