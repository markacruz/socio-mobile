import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/UserContext";
import {
  View,
  Image,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Post } from "../components/Post";
import { SplashScreen } from "./SplashScreen";
import { getUserPosts } from "../services/httpClient";
import ProfileStyles from "../styles/ProfileStyles";
import Styles from "../styles/Styles";
import { CreatePost } from "../components/CreatePost";
import { Header } from "../components/Header";

export const Profile = () => {
  const userContext = useContext(UserContext);
  const [userPosts, setUserPosts] = useState([]);
  const [postDescription, setPostDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUserPosts = async () => {
      const post = await getUserPosts(userContext.userData.username);
      return post;
    };
    fetchUserPosts().then((response: any) => {
      setUserPosts(response.data);
    });
  }, []);

  return (
    <View>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={Styles.container}>
        <CreatePost
          postDescription={postDescription}
          setPostDescription={setPostDescription}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Image
          source={require("../img/DefaultProfile.jpg")}
          style={{
            height: 150,
            width: 150,
            borderRadius: 100,
            marginBottom: 10,
            marginTop: 30,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {userContext.userData.username}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <View style={ProfileStyles.statistics}>
            <Text style={ProfileStyles.statisticsText}>{userPosts.length}</Text>
            <Text>Posts</Text>
          </View>
          <View style={ProfileStyles.statistics}>
            <Text style={ProfileStyles.statisticsText}>
              {userContext.userData.followers.length}
            </Text>
            <Text>Followers</Text>
          </View>
          <View style={ProfileStyles.statistics}>
            <Text style={ProfileStyles.statisticsText}>
              {userContext.userData.followings.length}
            </Text>
            <Text>Following</Text>
          </View>
        </View>

        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DADDE1",
            marginHorizontal: 10,
            marginBottom: 7,
            width: "90%",
            borderRadius: 30,
            height: 60,
          }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{ color: "#606770", fontSize: 15 }}>
            What's on your mind,{" "}
            {userContext.userData.username
              ? userContext.userData.username
              : "User"}
            ?
          </Text>
        </Pressable>

        {userContext.timelineData === [] ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <View style={{ flex: 1, width: "100%" }}>
            <FlatList
              data={userPosts}
              renderItem={({ item }: any) => (
                <View>
                  <Post
                    postId={item._id}
                    username={item.userId.username}
                    postDescription={item.desc}
                    createdAt={item.createdAt}
                    likes={item.likes}
                  />
                </View>
              )}
              keyExtractor={(item: any) => item._id}
            />
          </View>
        )}
      </View>
    </View>
  );
};
