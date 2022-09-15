import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    outlineColor: "black",
    height: 60,
    color: "dimgray",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    borderRadius: 15,
    margin: 12,
    padding: 14,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    zIndex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  loginButton: {
    marginTop: 10,
  },
  homeBackground: {
    height: "100%",
    width: "100%",
  },
  post: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  postProfileAndUsername: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  postProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default Styles;
