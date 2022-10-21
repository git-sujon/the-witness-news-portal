import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import  {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext= createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
 
    const [user, setUser] = useState(null)
   
    const [loading , setLoading] = useState(false)

    const signIn =(email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }    

    const createUser= (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signInThirdparty = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const emailVarification =() => {
    sendEmailVerification(auth.currentUser)
    .then(()=> {
        alert('Check your Email')
    })
    .catch(error => {
        console.error(error)
    })
    }

    const LogOut = () => {
        return signOut(auth)
    }


    const userInformationProviding =(name,picUrl)=>{
       const properties= updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:picUrl
        })
       return properties()
    }



    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
            setLoading(true)
        })
        return ()=> {
            unSubscribe()
        }

    }, [])

    const authInfo={user, signInThirdparty, user, loading, LogOut, signIn, createUser, emailVarification, userInformationProviding,  setLoading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;