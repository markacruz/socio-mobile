import { View, TextInput, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  searchQuery: any;
  setSearchQuery: any;
  navigation: any;
};

export const Header = ({ searchQuery, setSearchQuery, navigation }: Props) => {
  return (
    <View
      style={{
        height: 70,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#dcdcdc",
        marginBottom: 5,
        backgroundColor: "#a9a9a9",
      }}
    >
      <Image
        source={require("../img/SocioBlackCropped.png")}
        style={{ height: "50%", width: "20%" }}
      />
      <TextInput
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder={"Search"}
        style={{
          marginVertical: 5,
          marginHorizontal: 10,
          borderRadius: 15,
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
          backgroundColor: "lightgray",
          height: 55,
          paddingLeft: 20,
          fontSize: 15,
          width: "60%",
        }}
      />
      <Pressable onPress={() => navigation.navigate("Settings")}>
        <Ionicons name="settings-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};
