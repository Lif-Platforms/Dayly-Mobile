import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

// Import environment variables
import { AUTH_SERVER_URL } from '@env';

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
        fetch(`${AUTH_SERVER_URL}/lif_login`, {
            method: 'POST',
            body: login_data
        })
            .then(response => {
                // Check http status code
                if (response.ok) {
                    // Navigate to home page
                    // Also reset navigation stack so user can't navigate back to login page
                    navigation.reset({index: 0, routes: [{name: 'Home'}]});
                } else {
                    throw new StatusCodeError(`Status code: ${response.status}`, response.status);
                }
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
            <TextInput placeholder="Username" onChangeText={handleUsernameChange} style={styles.input} placeholderTextColor='#878787' />
            <TextInput placeholder="Password" onChangeText={handlePasswordChange} secureTextEntry={true} style={styles.input} placeholderTextColor='#878787' />
            <TouchableOpacity style={styles.login_button} onPress={() => handle_login()}>
                <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.bottom_text}>Don't have an account? <Text style={styles.create_account_text}>Create One!</Text></Text>
            <Text style={styles.login_status}>{loginStatus}</Text>
        </View>
    )
}

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
export default LoginPage;