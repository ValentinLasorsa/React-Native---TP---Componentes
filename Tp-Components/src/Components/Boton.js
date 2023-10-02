import React, { useState } from "react";
import {TouchableOpacity, Text, StyleSheet } from "react-native";

const Boton = ({ event, style, text }) => {
    const [date, setDate] = useState('');

    const handleButton = () => {
        let newDate = new Date();
        setDate(newDate)
        console.log(`La fecha es: ${newDate}.`);
        event();
    };
    const onPressFunction = () => {
 
        event;
    }  
    return (
        <>
            <TouchableOpacity onPress={handleButton} style={[styles.buttonContainer, style]}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '40%',
        backgroundColor: 'rgb(33,150,243)',
        borderRadius: 2,
        paddingVertical: 12,
        marginTop: 15,
        marginBottom: 15,
        paddingBlock: 1,
        paddingInline: 6,
    },
    buttonText: {
        padding: '8px',
        color:'#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        textTransform: 'uppercase',
    },
});

export default Boton;