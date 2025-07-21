import { createContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import auth from "./../../Firebase/firebase.init";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const ContextApi = ({ children }) => {
    const [user] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    };
    const createUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const authInfo = {
        user,
        loading,
        createUser,
        createUserWithGoogle,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default ContextApi;
