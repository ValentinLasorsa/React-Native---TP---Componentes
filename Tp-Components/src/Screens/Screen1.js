import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const Screen1 = ({ navigation }) => {
    const handleLogout = () => {
    navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estás en la screen 1</Text>
            <Button style={styles.button} title="Ver AsyncStorage" />
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