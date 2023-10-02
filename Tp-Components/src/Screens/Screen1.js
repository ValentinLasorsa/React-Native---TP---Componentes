import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Boton from '../Components/Boton';
import msjConstantes from '../msjConstantes';
import ServicioUsuario from '../Service/ServicioUsuario';

const Screen1 = ({ navigation }) => {

  let servicioUsuario = new ServicioUsuario();

  const alertAsyncStorage = async () => {
    let credenciales = await servicioUsuario.getCredenciales();
    alert(msjConstantes.MSJ_SHOW_CREDENCIALES + JSON.stringify(credenciales));
  }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Estás en la screen 1</Text>
        <Boton event={alertAsyncStorage} text={"Ver asyncStorage"}></Boton>
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
    button:{

        marginHorizontal: 50,
        marginVertical: 10,
      },
});

export default Screen1;