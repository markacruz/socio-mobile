
import { useState, useContext, useEffect } from 'react';
import { Text, View, Button, ImageBackground, TextInput, Image } from 'react-native';
import Styles from '../styles/Styles';
import { postLogin } from '../services/httpClient';
import { UserContext } from '../store/UserContext';

type Props = {
    navigation: any;
}

export const Login = ({ navigation }: Props) => {
    const userContext = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onLoginPress = async (email: string, password: string) => {
        let res: any = await postLogin(email, password);
        if (res) {
            userContext.login(res.data)
        }
    }

    useEffect(() => {
        if (!userContext.isSignedIn) {
            console.log('Not signed in')
        } else {
            navigation.navigate('Sign In', { screen: 'Home' })
        }
    }, [userContext.isSignedIn])

    return (
        <ImageBackground 
            source={require('../img/Background.jpg')}
            style={Styles.backgroundImage}
        >
            <View style={Styles.container}>
                <Image
                    source={(require('../img/SocioBlack.png'))}
                    style={{height: '50%', width: '50%', marginBottom: -170}}
                />
                <TextInput
                    style={Styles.textBox}
                    onChangeText={setEmail}
                    value={email}
                    placeholder={"Enter email"}
                />
                <TextInput
                    style={Styles.textBox}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Enter password"
                />
                <Text 
                    onPress={() => navigation.navigate('Sign Up')}
                    style={{color: 'white'}}
                >
                    Have no account? 
                    <Text style={{fontWeight: "bold", marginLeft: 4}}>Sign up.</Text>
                </Text>
                <View style={Styles.loginButton}>
                    <Button
                        title="Login"
                        onPress={(e) => onLoginPress(email, password)}
                        color="#841584"
                        accessibilityLabel="Login with your account"
                        />
                </View>
            </View>
        </ImageBackground>
    );
}

    

