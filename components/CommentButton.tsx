import React, { useState } from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const CommentButton = () => {
  const [liked, setLiked] = useState(false);
  
  return (
    <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
      <AntDesign
        name={"message1"}
        size={26}
        color={"black"}
      />
    </Pressable>
  );
};