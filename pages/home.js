import { View, Text, Button } from "react-native";

function HomePage({ navigation }) {
    return(
        <View>
            <Text>Main Page</Text>
            <Button title="Back" onPress={() => navigation.navigate("Login")} />
        </View>
    )
}

export default HomePage;