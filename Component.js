import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


const Test = ({navigation}) => {
    const [showText, setShowText] = useState(false);


    const handleButtonPressed = () => {
        console.log("Button Pressé !");
        setShowText((prevShowText) => !prevShowText);
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPressed}> Clique sur moi !</TouchableOpacity>
        {showText ? (
          <Text>Coucou Maxence !</Text>
        ) : null}
      <TextInput style={styles.input} placeholder="Écrivez votre message..."/>
      <TouchableOpacity style={styles.button} onPress={() =>
        navigation.navigate('Home2')
      }> Go screen 2 </TouchableOpacity>
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
  input: {
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    height: 40,
    width: 250,
    borderRadius: 10,
  },
  button: {
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});

export default Test;