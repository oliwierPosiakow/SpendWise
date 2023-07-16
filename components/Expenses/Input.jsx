import React from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import {COLORS} from "../../constants/COLORS";

function Input({labelText, inputConfig, style, isValid}) {
    const isMultiline = inputConfig.multiline ? true : ''
    const validStyling = isValid ? '' : styles.invalidForm

    return (
        <View style={[styles.inputWrapper, style]}>
            <Text style={[styles.label, validStyling]}>{labelText}</Text>
            <TextInput style={[styles.input, isMultiline ? styles.inputMultiline : '', validStyling]} {...inputConfig}/>
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
    },
    invalidForm:{
        color: COLORS.accent1
    }

})