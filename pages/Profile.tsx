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

export const Profile = () => {
  const userContext = useContext(UserContext);
  const [userPosts, setUserPosts] = useState([]);
  const [postDescription, setPostDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

      <View style={{ borderTopWidth: 1, borderBottomWidth: 1 }}>
        <Pressable
          style={ProfileStyles.postButton}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={ProfileStyles.postButtonText}>Post!</Text>
        </Pressable>
      </View>

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
  );
};
