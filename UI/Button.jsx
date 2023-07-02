import React from 'react';
import {View, Pressable, Text, StyleSheet} from "react-native";
import {COLORS} from "../constants/COLORS";

function Button({children, onPress, mode, style}) {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed}) => pressed ? styles.pressed : ''} >
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.btnText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button:{
        borderRadius: 7,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: COLORS.accent2,
    },
    flat:{
        backgroundColor: 'transparent'
    },
    btnText:{
        color: COLORS.primary,
        fontWeight: 700,
        fontSize: 16,
        textAlign: "center"
    },
    flatText:{
        color: COLORS.accent2,
    },
    pressed: {
        opacity: 0.7,
    }
})