import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "../../constants/COLORS";

function ExpensesSummary({periodName, expenses}) {

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum += expense.amount
    }, 0)

    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>{periodName}:</Text>
            <Text style={[styles.summaryText, styles.accent]}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    summaryContainer:{
        backgroundColor: COLORS.accent1,
        borderRadius: 7,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    summaryText: {
        color: COLORS.primary,
        fontSize: 16
    },
    accent:{
        color: COLORS.primary
    }
})