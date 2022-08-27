import { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import { Text, View, Image } from 'react-native';
import { LikeButton } from './LikeButton';
import Styles from '../styles/Styles';
import { CommentButton } from './CommentButton';

type Props = {
    postId: string
    username: string,
    postDescription: string,
    createdAt: string,
    likes: []
}

export const Post = ({ postId, username, postDescription, createdAt, likes }: Props) => {
    
    const userContext = useContext(UserContext)

    return (
    <View style={Styles.post}>
        <View style={Styles.postProfileAndUsername}>
            <Image 
            style={Styles.postProfile}
            source={require("../img/DefaultProfile.jpg")}
            />
            <View>
                <Text style={{fontWeight: "bold"}}>
                    {username}
                </Text>
                <Text>
                    {new Date(createdAt).toLocaleString('en-US', { hour12:true }).replace(',', '')}
                </Text>
            </View>
        </View>
        <Text>
            {postDescription}
        </Text>
        
        <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
            <LikeButton postId={postId} />
            <Text style={{marginLeft: 5, marginRight: 15}}>
                {likes.length}
            </Text>
            {/* <CommentButton />
            <Text style={{marginLeft: 5, marginRight: 15}}>
            </Text> */}
        </View>
    </View>
    )
}