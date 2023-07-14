import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {COLORS} from "../../constants/COLORS";
import {dummy} from "../../constants/DUMMY";
import {useSelector} from "react-redux";

function ExpensesOverview({expenses, period, fallback}) {

    const expensesStore = useSelector(state => state.expenses.expenses)

    return (
        <View style={styles.expensesContainer}>
            <ExpensesSummary expenses={expenses} periodName={period}/>
            {expenses.length == 0 ?
                <Text style={styles.infoText}>{fallback}</Text> :
                <ExpensesList expenses={expenses}/>
            }
        </View>
    );
}

export default ExpensesOverview;

const styles = StyleSheet.create({
    expensesContainer:{
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.background
    },
    infoText:{
        color: COLORS.primary,
        textAlign: "center",
        fontSize: 22,
        marginTop: 48,

    }
})