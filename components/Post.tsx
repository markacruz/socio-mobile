import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { Text, View, Image, Pressable } from "react-native";
import { LikeButton } from "./LikeButton";
import Styles from "../styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import { deletePost } from "../services/HttpClient";

type Props = {
  postId: string;
  username: string;
  postDescription: string;
  createdAt: string;
  likes: [];
};

export const Post = ({
  postId,
  username,
  postDescription,
  createdAt,
  likes,
}: Props) => {
  const userContext = useContext(UserContext);

  const deletePostHandler = (postId: string, userId: string) => {
    const deletePost: any = async () => {
      const post = await deletePost(postId, userId);
      return post;
    };
    deletePost().then((response: any) => {
      console.log(response);
    });
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 8,
        borderRadius: 5,
        marginHorizontal: 10,
      }}
    >
      <View style={Styles.postProfileAndUsername}>
        <Image
          style={Styles.postProfile}
          source={require("../img/DefaultProfile.jpg")}
        />
        <View>
          <Text style={{ fontWeight: "bold" }}>{username}</Text>
          <Text>
            {new Date(createdAt)
              .toLocaleString("en-US", { hour12: true })
              .replace(",", "")}
          </Text>
        </View>
        <Pressable
          style={{ marginLeft: 125 }}
          onPress={() => deletePostHandler(postId, userContext.userData._id)}
        >
          <Ionicons name="trash-outline" size={24} color="red" />
        </Pressable>
      </View>
      <Text>{postDescription}</Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <LikeButton postId={postId} />
        <Text style={{ marginLeft: 5, marginRight: 15 }}>{likes.length}</Text>
        {/* <CommentButton />
            <Text style={{marginLeft: 5, marginRight: 15}}>
            </Text> */}
      </View>
    </View>
  );
};
