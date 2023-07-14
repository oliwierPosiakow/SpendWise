import React from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import {COLORS} from "../../constants/COLORS";

function Input({labelText, inputConfig}) {
    const isMultiline = inputConfig.multiline ? true : ''
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>{labelText}</Text>
            <TextInput style={[styles.input, isMultiline ? styles.inputMultiline : '']} {...inputConfig}/>
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    label:{
        color: COLORS.accent2,
        fontSize: 16,
        marginVertical: 10,
    },
    input:{
        backgroundColor: COLORS.primary,
        fontSize: 20,
        borderRadius: 7,
        padding: 10,
        color: COLORS.secondary
    },
    inputMultiline:{
        minHeight: 100,
        textAlignVertical: "top",
    }

})