import { createContext, useState } from "react";
import { profileMock } from "../mock/userContext/profile";

export const UserContext = createContext({
  isSignedIn: false,
  userData: {},
  timelineData: [],
  login: (data: {}) => {},
  getTimelineData: (data: []) => {},
  addOrRemoveLike: (postId: string) => {},
  signOut: () => {},
});

type Props = {
  children: any;
};

const UserContextProvider = ({ children }: Props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [timelineData, setTimelineData] = useState([]);

  const loginHandler = (data: {}) => {
    setIsSignedIn(true);
    setUserData(data);
  };

  const timelineDataHandler = (data: []) => {
    setTimelineData(data);
  };

  const likeAndDislikeHandler = (postId: string) => {
    const newArr = timelineData.map((post) => {
      if (post._id === postId) {
        if (post.likes.includes(userData._id)) {
          return post.likes.filter((like) => like !== userData._id);
        } else {
          return post.likes.push(userData._id);
        }
      }
    });
    setTimelineData(newArr);
  };

  const signOutHandler = () => {
    setIsSignedIn(false);
    setTimelineData([]);
    setUserData({});
  };

  const value = {
    isSignedIn: isSignedIn,
    timelineData: timelineData,
    userData: userData,
    login: loginHandler,
    getTimelineData: timelineDataHandler,
    addOrRemoveLike: likeAndDislikeHandler,
    signOut: signOutHandler,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
