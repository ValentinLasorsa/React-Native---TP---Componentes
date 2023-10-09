import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import Boton from '../Components/Boton';
import msjConstantes from '../msjConstantes';
import ServicioUsuario from '../Service/ServicioUsuario';

const LogIn = ({navigation}) => {
  let service = new ServicioUsuario();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const staticImage = require('../../assets/LogoImg.png')

  const handleLogin = async() => {
    if (username !== "" && password !== "") {    
      if (await service.login(username.toLowerCase(),password.toLowerCase())){
        
        await service.storageCredenciales(username.toLowerCase(),password.toLowerCase());
        alert(MessageConstants.MSJ_USUARIO_CREADO)
        navigation.navigate('PageTabs');
      }
      else{
        alert(msjConstantes.MSJ_VALIDACION)
      }
    }else{
      alert(msjConstantes.MSJ_CAMPOS_ERROR)
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <Image source={staticImage} style={styles.image}/>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput 
        style={styles.input}
        editable
        maxLength={12} 
        placeholder="Ingresar usuario('Yogui')" 
        onChangeText={(text)=>setUsername(text)} 
        value={username} 
        returnKeyType='next' 
        onSubmitEditing={() => { passwordRef.current.focus(); }} 
        blurOnSubmit={false}
        />
        
      <TextInput  
        textAlignVertical=''
        editable
        style={styles.input} 
        placeholder="Ingresar clave('monty')"
        onChangeText={(text)=>setPassword(text)} 
        value={password}
        ref={passwordRef} 
        secureTextEntry
      />
      <Boton event={handleLogin} text={"Iniciar sesión"}></Boton>
    </SafeAreaView>
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

export default LogIn;