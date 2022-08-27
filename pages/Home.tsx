import { useEffect, useState, useContext } from "react"
import { View, FlatList, Text } from "react-native"
import { SplashScreen } from "./SplashScreen"
import { Post } from "../components/Post"
import Styles from "../styles/Styles"
import { UserContext } from "../store/UserContext"
import { getPosts } from "../services/httpClient"
import { CreatePost } from "../components/CreatePost"
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export const Home = () => {
    const userContext = useContext(UserContext)
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const post = await getPosts("6303c51e9ab17ceda19e8ec3")
            return post
        }
        fetchPosts().then((response: any) => {
            userContext.getTimelineData(response[0])
            }
        )
    }, [])

    if (userContext.timelineData === []) {
        console.log("Splash!")
        return (
            <SplashScreen />
        )
    } else {
        return (
            <View style={Styles.homeBackground}>
                <TextInput
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    placeholder={"Search"}
                    style={{marginVertical: 5,
                        marginHorizontal: 10,
                        borderRadius: 15,
                        borderTopStartRadius: 15,
                        borderTopEndRadius: 15
                    }}
                />
                <CreatePost />
                <FlatList 
                data={userContext.timelineData}
                renderItem={({item}: any) =>
                <View>
                    <Post 
                    postId={item._id}
                    username={item.userId.username}
                    postDescription={item.desc}
                    createdAt={item.createdAt}
                    likes={item.likes}
                    />
                </View>
                }
                keyExtractor={(item: any) => item._id}
                />
                
            </View>
        )
    }
}