import { getAuth,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import React ,{createContext,useState} from 'react';
 import { useDispatch } from "react-redux";
 import { Provider } from 'react-redux';
import { checkLogin } from "../app/appState/Login/LoginSlice";
import { store } from '../app/appState/store';



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
   const dispatch = useDispatch();

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
       dispatch(
         checkLogin({
          LOGIN:false,
          ERROR:error.code,
         })
       )
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



