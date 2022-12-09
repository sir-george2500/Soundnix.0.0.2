import {signOut} from "firebase/auth";
import React ,{createContext,useState} from 'react';
import { login } from "../app/appState/Login/LoginSlice";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
 

  return (
   <AuthContext.Provider 
   value={{
    user,
    setUser,
    Login:(auth,email,password)=>login(auth ,email,password),
    logOut:async(auth)=>{
      try {
        await signOut(auth);
      } catch (error) {
        console.log(error);
      }
    }

   }}
   >
    {children}
   </AuthContext.Provider>
  )
}



