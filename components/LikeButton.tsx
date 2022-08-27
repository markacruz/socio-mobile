import React, { useState, useEffect } from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { addOrRemoveLike } from "../services/httpClient";

type Props = {
  postId: string
}

export const LikeButton = ({ postId }: Props) => {
  const [liked, setLiked] = useState({});

  const pressLikeButton = (postId: string) => {
    addOrRemoveLike(postId)
    
    setLiked((isLiked) => !isLiked)
  }
  
  return (
    <Pressable onPress={() => pressLikeButton(postId)}>
      {liked ? 
      <AntDesign
        name={"heart"}
        size={28}
        color={"red"}
      /> :
      <AntDesign
        name={"hearto"}
        size={28}
        color={"black"}
      />
      }
    </Pressable>
  );
};