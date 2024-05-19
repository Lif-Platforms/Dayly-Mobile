import { View, Text, StatusBar , Image, TouchableOpacity, ScrollView } from "react-native";
import * as Haptics from 'expo-haptics';

// Import environment variables
import { AUTH_SERVER_URL } from '@env';

// Import styles
import styles from "../styles/home/style";

function HomePage({ navigation }) {

    // Configure styles for header bar
    navigation.setOptions({
        headerTitle: '',
        headerStyle: {
            height: 45,
            backgroundColor: '#000E15',
            shadowColor: 'transparent',
        },
    });

    return(
        <View style={styles.mainPage}>
            <StatusBar style="light" />
            <View style={styles.topNav}>
                <Image source={require('../assets/dayly-logo.png')} style={styles.logo} />
                <View style={styles.topNavButtons}>
                    <TouchableOpacity>
                        <Image source={require("../assets/global/post-button.png")} style={styles.postButton} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{uri: `${AUTH_SERVER_URL}/get_pfp/default`}} style={styles.profileButton} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal={false}>
                <Text style={styles.header}>Stories</Text>
                <ScrollView horizontal={true} style={styles.storiesContainer}>
                    <TouchableOpacity style={styles.addToStory} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                        <Image source={require('../assets/plus-icon.png')} style={styles.storyPlusIcon} />
                        <Text style={styles.storyAddText}>Add to your Story</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.bottomNavChildren} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                    <Image source={require('../assets/global/home-button.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavChildren} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                    <Image source={require('../assets/global/trending-button.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavChildren} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                    <Image source={require('../assets/global/notifications-button.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomePage;