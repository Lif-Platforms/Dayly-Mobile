import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import * as SecureStore from 'expo-secure-store';

// Import styles
import styles from "../styles/login/style";

// Import environment variables
import { AUTH_SERVER_URL } from '@env';

// Save username and token to device for later use
async function auth_save(username, token) {
    await SecureStore.setItemAsync("username", username);
    await SecureStore.setItemAsync("token", token);
  }

function LoginPage({ navigation}) {

    // Configure styles for header bar
    navigation.setOptions({
        headerTitle: '',
        headerStyle: {
            height: 45,
            backgroundColor: 'white',
        },
    });

    // Define useStates for the username and password text inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Used for telling the user the status of the login
    // Usually if something fails
    const [loginStatus, setLoginStatus] = useState('');

    // Handle username text input change
    // Also update username 'useState' variable
    const handleUsernameChange = (value) => {
        setUsername(value);
    };

    // Handle password text input change
    // Also update password 'useState' variable
    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    // Function for handling the login process
    function handle_login() {
        console.log(`HTTP request to: ${AUTH_SERVER_URL}/lif_login`);

        // Error class for handling http status code errors
        class StatusCodeError extends Error {
            constructor(message, status_code) {
              super(message);
              this.status_code = status_code;
            }
        }

        // Create form data for login request
        const login_data = new FormData();

        // Add credentials to form data
        login_data.append('username', username);
        login_data.append('password', password);

        // Make HTTP request
        fetch(`${AUTH_SERVER_URL}/auth/login`, {
            method: 'POST',
            body: login_data,
            cache: "no-cache"
        })
        .then(response => {
            // Check http status code
            if (response.ok) {
                return response.json();
            } else {
                throw new StatusCodeError(`Status code: ${response.status}`, response.status);
            }
        })
        .then(data => {
            // Save username and token to device
            auth_save(username, data.token);

            // Navigate to home page
            // Also reset navigation stack so user can't navigate back to login page
            navigation.reset({index: 0, routes: [{name: 'Home'}]});
        })
        .catch(error => {
            console.error(error);
            console.log(error.status_code);

            // Check http error code
            if (error.status_code === 401) {
                setLoginStatus('Incorrect Username or Password');
            } else {
                setLoginStatus('Something Went Wrong!');
            }      
        });
    }

    return(
        <View style={styles.page}>
            <Image source={require('../assets/login/login_graphic.png')} style={styles.header_image} />
            <Text style={styles.title} >Login With Lif</Text>
            <KeyboardAvoidingView behavior="position">
                <TextInput placeholder="Username" onChangeText={handleUsernameChange} style={styles.input} placeholderTextColor='#878787' />
                <TextInput placeholder="Password" onChangeText={handlePasswordChange} secureTextEntry={true} style={styles.input} placeholderTextColor='#878787' />
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.login_button} onPress={() => handle_login()}>
                <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.bottom_text}>Don't have an account? <Text style={styles.create_account_text}>Create One!</Text></Text>
            <Text style={styles.login_status}>{loginStatus}</Text>
        </View>
    )
}

export default LoginPage;