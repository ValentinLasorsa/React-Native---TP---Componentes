import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen3 = ({ navigation }) => {
    const handleLogout = () => {
    navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estás en la screen 3</Text>
            <Button style={styles.button} title="LogOut" onPress={handleLogout} />
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
