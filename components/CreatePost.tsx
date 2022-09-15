import { useContext } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  Alert,
  Modal,
  Image,
} from "react-native";
import { UserContext } from "../store/UserContext";
import { newPost } from "../services/HttpClient";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  postDescription: any;
  setPostDescription: any;
  modalVisible: any;
  setModalVisible: any;
};

export const CreatePost = ({
  postDescription,
  setPostDescription,
  modalVisible,
  setModalVisible,
}: Props) => {
  const userContext = useContext(UserContext);

  const newPostHandler = (userId: string, desc: string) => {
    const fetchPosts = async () => {
      const post = await newPost(userId, desc);
      return post;
    };
    fetchPosts().then((response: any) => {
      userContext.getTimelineData(
        userContext.timelineData.concat([response.data])
      );
    });
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              width: 350,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/DefaultProfile.jpg")}
                  style={{ height: 50, width: 50, marginRight: 10 }}
                />
                <Text>
                  {userContext.userData.username
                    ? userContext.userData.username
                    : "User"}
                </Text>
                <Pressable
                  style={{ position: "absolute", right: 0 }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={24}
                    color="black"
                  />
                </Pressable>
              </View>

              <TextInput
                style={{
                  borderBottomWidth: 0,
                  padding: 10,
                  width: 250,
                  borderRadius: 5,
                  fontSize: 18,
                }}
                onChangeText={setPostDescription}
                value={postDescription}
                placeholder={`What's on your mind, ${
                  userContext.userData.username
                    ? userContext.userData.username
                    : "User"
                }?`}
                multiline={true}
                numberOfLines={4}
              />
              <Pressable
                style={{
                  backgroundColor: "#3578E5",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  marginTop: 10,
                  borderRadius: 5,
                }}
                onPress={() =>
                  newPostHandler(userContext.userData._id, postDescription)
                }
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Post!
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
