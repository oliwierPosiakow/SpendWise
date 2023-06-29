import React from 'react';
import {Pressable, View, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons/';
import {COLORS} from "../constants/COLORS";

function IconButton({color, size, name, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Entypo name={name} size={size} color={color} />
            </View>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer:{
        paddingHorizontal: 10,
    },
    pressed:{
        opacity: 0.7
    }
})