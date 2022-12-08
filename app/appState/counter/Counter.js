import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './CounterSlice';
import { useState } from "react";
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";

const Counter = () => {
   const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <SafeAreaView style={styles.container}>
        <View >

            <Text>{count}</Text>
            <TouchableOpacity onPress={() => dispatch(decrement())}>
                <Text>Subtract</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(increment())}>
                <Text>Add 1</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default Counter

const styles = StyleSheet.create({
 container:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red",
    flex:1,
 }
})