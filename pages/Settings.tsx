import { View, Pressable, Text } from "react-native";

export const Settings = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Pressable
        style={{
          borderRadius: 5,
          padding: 30,
          width: 125,
          marginVertical: 10,
          backgroundColor: "#DADDE1",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Edit Profile
        </Text>
      </Pressable>
      <Pressable
        style={{
          borderRadius: 5,
          padding: 30,
          width: 125,
          marginVertical: 10,
          backgroundColor: "#DADDE1",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Change Password
        </Text>
      </Pressable>
      <Pressable
        style={{
          borderRadius: 5,
          padding: 30,
          width: 125,
          marginVertical: 10,
          backgroundColor: "#DADDE1",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Sign Out
        </Text>
      </Pressable>
    </View>
  );
};
