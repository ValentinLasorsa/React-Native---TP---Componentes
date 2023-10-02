import { useEffect } from "react";
import {Image, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import Logo from "../../assets/Logo.png";
import UsuarioService from "../Services/UsuarioService";

const SplashScreen = ({navigation}) => { 
    let usuarioService = new UsuarioService();

    const verificarLogIn = async() => {
      if(await usuarioService.autoLogin()){
        navigation.navigate("PageTabs");
      }else{
        navigation.navigate("LogIn");
      }
    }
  
    useEffect(() => {
      setTimeout(verificarLogIn, 3000);
    }, [])
  
    return (
      <SafeAreaView style={[styles.container]}>
        <Image source={Logo} style={styles.logo}/>
        <ActivityIndicator size="large"/>
      </SafeAreaView>
    )
  }
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