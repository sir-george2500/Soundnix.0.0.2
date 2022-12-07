import { View, Text } from 'react-native'
import { getAuth,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import React ,{createContext,useContext ,useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
   <AuthContext.Provider 
   value={{
    user,
    setUser,
    login:async (auth,email,password)=>{
     try {
        console.log("Authicating")
       await signInWithEmailAndPassword(auth,email,password);
       console.log("Authicated");
     } catch (error) {
       console.log(error);
     }  
    },

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



