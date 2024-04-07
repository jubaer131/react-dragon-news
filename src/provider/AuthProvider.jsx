import { createContext, useEffect, useState } from "react";
import { applyActionCode, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../assets/firebase/Firebase.config";

export const Authcontext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const creatuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
            setloading(false)
        })
        return () => {
            unsubscribe()
        }


    }, [])


    const creatsignin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authinfo = {
        user
        , creatuser,
        creatsignin,
        logout,
        loading
    }

    return (
        <div>
            <Authcontext.Provider value={authinfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default AuthProvider;