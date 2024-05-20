import { View, Text, StatusBar , Image, TouchableOpacity, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useRef, useState } from "react";
import * as SecureStore from 'expo-secure-store';

// Import environment variables
import { DAYLY_SERVER_URL } from '@env';

// Import styles
import styles from "../styles/post/style";
import { TextInput } from "react-native-gesture-handler";

function Post({ navigation }) {

    // Configure styles for header bar
    navigation.setOptions({
        headerTitle: 'New Post',
        headerTintColor: 'white',
        headerStyle: {
            height: 100,
            backgroundColor: '#000E15',
            shadowColor: '#233843',
            
        },
    });

    // Define useStates for the title and description text inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Handle title text input change
    // Also update title 'useState' variable
    const handleTitleChange = (value) => {
        setTitle(value);
    };

    // Handle description text input change
    // Also update description 'useState' variable
    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const [image, setImage] = useState(null);
    const [uploadText, setUploadText] = useState("Upload Photo");

    const handle_image_upload = async () => {
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        // Launch image library to pick an image
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const asset = result.assets[0];
            setImage({ url: asset.uri, name: asset.fileName || 'Unknown' });
        }
    };

    // Update upload text with image name after image is chosen
    useEffect(() => {
        if (image !== null) {
          setUploadText(image.name);
        }
    }, [image]);

    async function handle_post() {
        // Get auth information from secure storage
        const username = await SecureStore.getItemAsync("username");
        const token = await SecureStore.getItemAsync("token");

        // Prepare form data
        const formData = new FormData();

        // Add title and description to form data
        formData.append("title", title);
        formData.append("description", description);

        // Add image to form data
        formData.append('file', {
            uri: image.url,
            type: 'image/jpg', // or 'image/png'
            name: image.name,
        });

        // Make request to backend to create post
        fetch(`${DAYLY_SERVER_URL}/new_post`, {
            method: 'POST',
            headers: {
                username: username,
                token: token
            },
            body: formData,
            cache: 'no-cache'
        })
        .then(response => {
            if (response.ok) {
                console.log("Post Created!");
            } else {
                throw new Error("Request failed! Status code: " + response.status);
            }
        })
        .catch(err => {
            console.error(err);
        })
    }

    return(
        <View style={styles.page}>
            <TextInput onChangeText={handleTitleChange} style={styles.postTitle} placeholder="Title" placeholderTextColor='#878787' />
            <TextInput onChangeText={handleDescriptionChange} style={styles.postDescription} multiline={true} placeholder="Description" placeholderTextColor='#878787' />
            <TouchableOpacity onPress={() => handle_image_upload()} style={styles.postPhotoButton}>
                <Image style={styles.postPhotoButtonIcon} source={require("../assets/post/add-icon.png")} />
                <Text style={styles.postPhotoButtonText}>{uploadText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handle_post()} style={styles.postCreateButton}>
                <Text style={styles.postCreateButtonText}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Post;