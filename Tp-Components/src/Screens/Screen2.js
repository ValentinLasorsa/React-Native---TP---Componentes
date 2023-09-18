import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
    const handleLogout = () => {
    navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estás en la screen 2</Text>
            <Button style={styles.button} title="Eliminar AsyncStorage" />
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