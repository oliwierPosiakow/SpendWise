import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {COLORS} from "../../constants/COLORS";

function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={COLORS.accent1}/>
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: COLORS.background
    }

})