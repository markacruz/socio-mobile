import { createContext, useState } from "react";

export const UserContext = createContext({
    isSignedIn: true,
    userData: {},
    timelineData: [],
    login: (data: {}) => {},
    getTimelineData: (data: []) => {},
    addOrRemoveLike: (userId: string, postId: string) => {}
})

type Props = {
    children: any
}

const UserContextProvider = ({ children }: Props) => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [userData, setUserData] = useState({});
    const [timelineData, setTimelineData] = useState([]);

    const loginHandler = (data: {}) => {
        setIsSignedIn(true);
        setUserData(data);
    };

    const timelineDataHandler = (data: []) => {
        setTimelineData(data);
    }
    
    const likeAndDislikeHandler = (userId: string, postId: string) => {
        const newArr = timelineData.map(post => {
            if (post._id === postId) {
                if (post.likes.includes(userId)) {
                    return post.likes.filter((like) => like !== userId)
                } else {
                    return post.likes.push(userId)
                }
            }
        })
        setTimelineData(newArr)
    }

    const value = {
        isSignedIn: isSignedIn,
        timelineData: timelineData,
        userData: userData,
        login: loginHandler,
        getTimelineData: timelineDataHandler,
        addOrRemoveLike: likeAndDislikeHandler 
    };
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;