import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
  const onLoad = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
  };
  onLoad();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <Image style={styles.image} source={require('../../assets/icon-login.png')} />
      <br></br>
     


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'space-around',
  },    
  button:{

    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default SplashScreen;