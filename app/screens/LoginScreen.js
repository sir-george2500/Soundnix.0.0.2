import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView, Modal, SafeAreaView } from 'react-native';

import Screen from '../components/Screen';
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import { ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ErrorMessage from '../components/forms/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';
import Constants from "expo-constants";
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import { getAuth} from '../api/firebase'
import { useSelector } from 'react-redux';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
function LoginScreen(props) {
  const {login} = useContext(AuthContext);
 const checkLogin = useSelector((state)=>state.login[state.login.length-1].LOGIN)
 const getError = useSelector((state)=>state.login[state.login.length-1].ERROR)

const [submitted,setSumbitted] = useState(false)
const [modalVisible,setModalVisible] = useState(false);
const [isError,setisError] = useState(false);
const [displayError,setdisplayError] = useState('Error');
const [Loading,setLoading] = useState(false);


  const handleSubmit = (values,{resetForm}) => {
    // This function received the values from the form
    // The line below extract the two fields from the values object.

    const { email, password } = values;
   
    const auth = getAuth;

   
      
      login(auth,email,password);

      if (checkLogin==false){
        switch(getError){
          case 'auth/too-many-requests' :
            return setisError('Too many request');
            case 'auth/wrong-password':
            return setisError('Wrong password');
        }
        setModalVisible(true);
        
        console.log(getError,"Hii ");
      }
    

    resetForm();
 
    
  }
  return (
  <>
    <ActivityIndicator  visible={Loading}/>
  

    <Image
        style={styles.logo}
        source={require('../assets/background.png')}
    />


   
    
     

 <ScrollView>      
     <>
<AppForm
        initialValues={{ name:'' ,email : '' , password :'' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
          
       <View style={styles.inputContainer}>
         <AppFormField
          autoCorrect={false}
          name = "email"
          icon="email"
          KeyboardType="email-address"     
          placeholder="Email"
          textContentType="emailAddress"
                />
     
        <AppFormField
          autoCorrect={false}
          name="password"
          autoCapitalize="none"
          icon="lock"
          pass="eye"
          KeyboardType="email-address"
          placeholder="Password"
          textContentType="password"
                 />
                
              
   <SubmitButton title="Login" disable={submitted} />
       </View>
    </AppForm>
    
    <Modal visible={isError} animationType="slide">
    <View   style={styles.ViewModalStyle}>
      <AppText style={{color:colors.danger}}>{displayError}</AppText>
      <AppButton  
      title="Close" 
      color='danger' 
      textColor="white" 
      elevation={10} 
      borderColor="danger"
      onPress={()=>setisError(false)}/>
    </View>
    </Modal>
    </>
      </ScrollView>
   


</>
  );
}

const styles = StyleSheet.create({

    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom:20,
    },
   ViewModalStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
   },
   registerScreen:{
    paddingTop: Constants.statusBarHeight,
   },

   inputContainer:{
    paddingRight:10,
    paddingLeft:10,
   }
  });



export default LoginScreen;