import { useEffect, useState, useContext } from "react";
import {
  View,
  FlatList,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Post } from "../components/Post";
import { UserContext } from "../store/UserContext";
import { getPosts, getSuggestedUsers } from "../services/httpClient";
import { CreatePost } from "../components/CreatePost";
import { Header } from "../components/Header";

export const Home = () => {
  const userContext = useContext(UserContext);
  const [postDescription, setPostDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const post = await getPosts(userContext.userData._id);
      return post;
    };
    fetchPosts().then((response: any) => {
      userContext.getTimelineData(response[0]);
    });
  }, []);

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      const suggested = await getSuggestedUsers(userContext.userData._id);
      return suggested;
    };
    fetchSuggestedUsers().then((response: any) => {
      setSearchData(response.data);
    });
  }, []);

  if (userContext.timelineData === []) {
    <ActivityIndicator size="small" color="#0000ff" />;
  } else {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <CreatePost
          postDescription={postDescription}
          setPostDescription={setPostDescription}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DADDE1",
            marginHorizontal: 10,
            marginBottom: 7,
            borderRadius: 30,
            height: 60,
            zIndex: 1,
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
        <FlatList
          data={userContext.timelineData}
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
    );
  }
};
