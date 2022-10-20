import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import  {getAuth, signInWithPopup } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext= createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
 
    const [user, setUser] = useState()

    const signInThirdparty = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        // const unSubscribe= 
    }, [])

    const authInfo={user, signInThirdparty}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;