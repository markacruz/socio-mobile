import { createContext, useState } from "react";

export const UserContext = createContext({
    isSignedIn: false,
    login: () => {}
})

const UserContextProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const loginHandler = () => {
        setIsSignedIn(true);
    }

    const value = {
        isSignedIn: isSignedIn,
        login: loginHandler
    }
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;