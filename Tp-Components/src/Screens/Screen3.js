import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Boton from '../Components/Boton';

const Screen3 = ({ navigation }) => {
    const handleLogout = () => {
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estás en la screen 3</Text>
            <Boton event={handleLogout} text={"LogOut"} style={styles.button}></Boton>
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

export default Screen3;
