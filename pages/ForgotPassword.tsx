
import { useState } from 'react';
import TextBox from '../components/TextBox';
import { Text, View, Button, ImageBackground } from 'react-native';
import Styles from '../styles/Styles';
import { postLogin } from '../services/httpClient';

export const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isValid, setValidity] = useState(false)

    const onLoginPress = async (email: string, password: string) => {
        let res = await postLogin(email, password);
        if (res === true) {
            setValidity(true)
        }
    }

    return (
        <ImageBackground 
            source={require('../img/Background.jpg')}
            style={Styles.backgroundImage}
        >
            <View style={Styles.container}>
                <TextBox
                    onChangeText={setEmail}
                    value={email}
                    placeholder={"Enter email"}
                />
                <TextBox
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Enter password"
                />
                <Text 
                    onPress={() => navigation.navigate('Forgot My Password Page')}
                >
                    Forgot my password
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

