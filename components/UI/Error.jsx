import React from 'react';
import {Entypo} from '@expo/vector-icons/';
import {COLORS} from "../../constants/COLORS";
import {StyleSheet, Text, View} from "react-native";
import Button from '../../UI/Button'

function Error({message, onConfirm}) {
    return (
        <View style={styles.errorWrapper}>
            <Entypo name="emoji-sad" size={64} color={COLORS.accent1} />
            <Text style={styles.errorText}>
                Something went wrong. {message}
            </Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    );
}

export default Error;

const styles = StyleSheet.create({
    errorWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
        gap: 15,
    },
    errorText:{
        color: COLORS.accent1,
        textAlign: "center",
        fontSize: 20
    },
})