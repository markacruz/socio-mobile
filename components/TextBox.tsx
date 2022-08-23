import { TextInput, View } from 'react-native';
import Styles from '../styles/Styles';

const TextBox = (props: any) => {
    return (
        <View>
            <TextInput
                style={Styles.textBox}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    )
}

export default TextBox;