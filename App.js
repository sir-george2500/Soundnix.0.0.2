import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { Provider } from 'react-redux';
import store from './app/appState/store';
import Counter from './app/appState/counter/Counter';
import { Provider as AppProvider} from './navigation/Provider/Provider';


export default function App() {
  return (
  
  //  <Provider/>
  // <Provider store={store}>
  //  <Counter/>
  // </Provider>
  <Provider store={store}>
  <AppProvider/>
  </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
