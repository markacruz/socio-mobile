import React, { useState, useEffect, useContext } from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { addOrRemoveLike } from "../services/httpClient";
import { UserContext } from "../store/UserContext";

type Props = {
  postId: string;
  likes: [];
};

export const LikeButton = ({ postId, likes }: Props) => {
  const [liked, setLiked] = useState(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    setLiked(likes.includes(userContext.userData._id));
  });

  const pressLikeButton = (postId: string) => {
    addOrRemoveLike(postId, userContext.userData._id);
  };

  return (
    <Pressable onPress={() => pressLikeButton(postId)}>
      {liked ? (
        <AntDesign name={"heart"} size={26} color={"red"} />
      ) : (
        <AntDesign name={"hearto"} size={26} color={"black"} />
      )}
    </Pressable>
  );
};
