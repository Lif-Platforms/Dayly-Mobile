import { View, Text, Button } from "react-native";

function LoginPage({ navigation}) {
    return(
        <View>
            <Text>Login Page</Text>
            <Button title="Login" onPress={() => navigation.reset({index: 0, routes: [{name: 'Home'}]})} />
        </View>
    )
}

export default LoginPage;