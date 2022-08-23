import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/Home';
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword';
import UserContextProvider, { UserContext } from './store/UserContext';


export default function App() {
  const userContext = useContext(UserContext)
  const Stack = createNativeStackNavigator();

  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
        {userContext.isSignedIn ?
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group> 
          :
          <Stack.Group>
            <Stack.Screen name="Log In" component={Login} />
            <Stack.Screen name="Forgot My Password " component={ForgotPassword} />
          </Stack.Group>
        }
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

