import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";

export const CreatePost = () => {
    
    const [post, setPost] = useState('');
    
    return (
        <View style={{backgroundColor: 'white', marginBottom: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                    placeholder="What's on your mind?"
                    style={{color: 'grey', width: '70%', height: 50, backgroundColor: 'lightgray', padding: 20, marginRight: 20}}
                />
                <Pressable>
                    <Text>
                        Post
                    </Text>
                </Pressable>
        </View>
    )
}