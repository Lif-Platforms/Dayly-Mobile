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
        console.log(`http request to: ${AUTH_SERVER_URL}/login/${username}/${password}`)
        fetch(`${AUTH_SERVER_URL}/login/${username}/${password}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // Check the status of the login
                if (data.Status === "Successful") {

                    // Navigate to home page
                    // Also reset navigation stack so user can't navigate back to login page
                    navigation.reset({index: 0, routes: [{name: 'Home'}]});

                } else if (data.Status === "Unsuccessful") {
                    setLoginStatus('Incorrect Username or Password');
                    
                } else {
                    setLoginStatus('Something Went Wrong!');
                }
            })
            .catch(error => {
                console.error(error);
                setLoginStatus('Something Went Wrong!');
            });
        }

    return(
        <View style={styles.page}>
            <Image source={require('../assets/dayly-logo.png')} style={styles.image} />
            <Text style={styles.title} >Login With Lif</Text>
            <TextInput placeholder="Username" onChangeText={handleUsernameChange} style={styles.input} />
            <TextInput placeholder="Password" onChangeText={handlePasswordChange} secureTextEntry={true} style={styles.input} />
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
        backgroundColor: 'white',
        height: '100%'
    },
    image: {
        width: 300,
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 100,
        marginTop: 50
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        marginTop: 10,
        fontWeight: 600
    },
    login_button: {
        backgroundColor: '#0066ff',
        borderRadius: 10,
        width: 150,
        padding: 10,
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
        backgroundColor: '#f1f1f1',
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 30,
        borderRadius: 10,
        padding: 10,
        width: 350,
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
        marginTop: 20
    },
    create_account_text: {
        color: 'blue'
    }
});
export default LoginPage;