import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Settings } from "./pages/Settings";
import UserContextProvider, { UserContext } from "./store/UserContext";
import { Profile } from "./pages/Profile";

export default function App() {
  const userContext = useContext(UserContext);
  const Stack = createNativeStackNavigator();

  return (
    <>
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Log In">
            <Stack.Screen
              name="Sign In"
              component={SignedIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Log In"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUp}
              options={{
                title: "",
                headerTransparent: true,
                headerStyle: {
                  backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}

function SignedIn() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "man" : "man-outline";
          } else if (route.name === "Settings") {
            iconName = focused
              ? "ellipsis-horizontal"
              : "ellipsis-horizontal-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
