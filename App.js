import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    
    <ImageBackground
      source={require('../I2U/assets/bgPage.png')}
      style={styles.backgroundImage} >
    <View style={styles.container}>
        <View>
          <Text> Hello.! Welcome to I2U Beta Version </Text>
          <StatusBar style="auto" />
        </View>
        <View>
          
          <Text style={styles.Labels}> User ID </Text>
          <TextInput style={styles.Inputs} />
          </View>
        <View>
          <Text style={styles.Labels}> Password </Text>
          <TextInput style={styles.Inputs} />
          </View>
        <View>
        <Button
          onPress={() => {
            alert("Login Successful");
          }}
          title="Login Page"
          />
        </View>
        <View>
          <Button style={styles.leftButton}
          onPress={() => {
            alert("Login Successful");
          }}
          title="Register"
          />
        </View>
    </View>
    </ImageBackground>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 25,
    color: "#ff3333",
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  Labels: {
    color: "#00BFFF",
    alignSelf: "flex-start",
    marginLeft: 50,
  },
  Inputs: {
    alignSelf: "flex-start",
    height: 30,
    width: 170,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 50,
  },
  leftButton: {
    marginLeft: 50,
    
  }
});
