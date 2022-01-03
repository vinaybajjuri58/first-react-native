import { Button, StyleSheet, Text, View } from 'react-native';
import {useCounter} from "../Context"
export const Counter = ()=>{
    const {counterState,dispatch} = useCounter();
    const incrementHandler = ()=>{
        dispatch({
            type:"INCREMENT"
        })
    }
    const decrementHandler = ()=>{
        dispatch({
            type:"DECREMENT"
        })
    }
    return(
        <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>Counter Value : {counterState.count}</Text>
        <Button onPress={incrementHandler} title="Increase Value" />
        <Button onPress={decrementHandler} title="Decrease Value" />
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer : {
        flex:1,
        alignItems:'center'
    }
  });