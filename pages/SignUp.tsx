import { useState, useContext } from "react";
import TextBox from "../components/TextBox";
import { Text, View, Button, ImageBackground } from "react-native";
import Styles from "../styles/Styles";
import { postNewUser } from "../services/httpClient";
import { UserContext } from "../store/UserContext";
import { TextInput } from "react-native-paper";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userContext = useContext(UserContext);

  const data = {
    username: username,
    email: email,
    password: password,
  };

  const onSignUpPress = async (data: any) => {
    let res: any = await postNewUser(data.username, data.email, data.password);
    if (res) {
      userContext.login(res.data);
    }
  };

  return (
    <ImageBackground
      source={require("../img/Background.jpg")}
      style={Styles.backgroundImage}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={Styles.textBox}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter username"
        />
        <TextInput
          style={Styles.textBox}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter email"
        />
        <TextInput
          style={Styles.textBox}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter password"
        />
        <TextInput
          style={Styles.textBox}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm password"
        />
        <View style={Styles.loginButton}>
          <Button
            title="Sign Up"
            onPress={(e) => onSignUpPress(data)}
            color="#841584"
            accessibilityLabel="Sign up new account"
          />
        </View>
      </View>
    </ImageBackground>
  );
};
