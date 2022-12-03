import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView, Modal, SafeAreaView } from 'react-native';

import Screen from '../components/Screen';
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import { ScrollView } from 'react-native';
import { auth } from '../api/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ErrorMessage from '../components/forms/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';
import Constants from "expo-constants";


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
function RegisterScreen(props) {

const [submitted,setSumbitted] = useState(false)
const [modalVisible,setModalVisible] = useState(false);
const [isError,setisError] = useState(false);
const [displayError,setdisplayError] = useState('Error');
const [Loading,setLoading] = useState(false);


  const handleSubmit = async (values,{resetForm}) => {
    // This function received the values from the form
    // The line below extract the two fields from the values object.
    setLoading(true);
    const { email, password } = values;
    var body = {
      password: password,
      email: email
    };


    const auth = getAuth();

    try{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user);
   //reset the form and set the modal visible to true with will allow the modal to pup up
   resetForm();
   
   setModalVisible(true);
   setSumbitted(false);
    // ...
    setLoading(false);
  })
  .catch((error) => {
    //call the loader for me
    setLoading(false);
    //disable the submit
    setSumbitted(true)
    // the modal for me
    setisError(true);
    const errorCode = error.code;
    const errorMessage = error.message;

    switch (errorCode){
      case 'auth/wrong-password':
        setdisplayError('Wrong Email or Password \n Please try again');
        break
      case 'auth/too-many-requests':
        setdisplayError('Too many Attempts your Account is disable pls try \n again');
        break
    }
    
    setSumbitted(false)
    console.log(isError);
    console.log(errorMessage);
    // ..
  })}catch(err){
    console.log("Oops on un expected Error :", err)
  };
    
    // auth.createUserWithEmailAndPassword(email, password)
    //   .then(userDetails => {
    //     // const user = userDetails;
    //     // console.log(user.email);
    //   }).catch(e => console.log(e));

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
    <Modal visible={modalVisible} animationType="slide">
    <View   style={styles.ViewModalStyle}>
      <AppText style={{color:colors.green}}>Registration Successful</AppText>
      <AppButton  
      title="Close" 
      color='green' 
      textColor="white" 
      elevation={10} 
      borderColor="green"
      onPress={()=>setModalVisible(false)}/>
    </View>
    </Modal>
    
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



export default RegisterScreen;