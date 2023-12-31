import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/COLORS";
import {useNavigation} from "@react-navigation/native";

function ExpenseItem({id, desc, amount, date}) {
    const navigator = useNavigation()
    function expenseHandler() {
        navigator.navigate('ManageScreen', {
            expenseId: id,
        })
    }
    return (
        <Pressable onPress={expenseHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonWrapper}>
                <View style={styles.descDateContainer}>
                    <Text style={styles.itemDesc}>{desc}</Text>
                    <Text style={styles.itemDate}>{date}</Text>
                </View>
                <View style={styles.amountWrapper}>
                    <Text style={styles.itemAmount}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    buttonWrapper:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 7
    },
    descDateContainer:{
        gap: 5,
    },
    itemDesc:{
        fontWeight: "bold",
        color: COLORS.secondary,
    },
    itemDate:{
        color: COLORS.secondary,
        fontWeight: '200',
    },
    amountWrapper:{
        backgroundColor: COLORS.background,
        padding: 10,
        width: 75,
        borderRadius: 5,
    },
    itemAmount:{
        color: COLORS.accent1,
        textAlign: "center",
    },
    pressed:{
        opacity: 0.7
    }
})