import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ToastAndroid } from 'react-native';
import Boton from '../Components/Boton';
import msjConstantes from '../msjConstantes';
import ServicioUsuario from '../Service/ServicioUsuario';

const Screen2 = ({ navigation }) => {

    const servicioUsuario = new ServicioUsuario();
    const eliminarAsyncStorage = async () => {
      await servicioUsuario.deleteCredenciales();
      ToastAndroid.show(msjConstantes.MSJ_DELETE_CREDENCIALES, ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estás en la screen 2</Text>
            <Boton event={eliminarAsyncStorage} text={"Eliminar asyncStorage"} style={styles.button}></Boton>
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

export default Screen2;