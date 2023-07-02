import React from 'react';
import {View, StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {COLORS} from "../../constants/COLORS";
import {dummy} from "../../constants/DUMMY";
import {useSelector} from "react-redux";

function ExpensesOverview({expenses, period}) {

    const expensesStore = useSelector(state => state.expenses.expenses)

    return (
        <View style={styles.expensesContainer}>
            <ExpensesSummary expenses={expensesStore} periodName={period}/>
            <ExpensesList expenses={expensesStore}/>
        </View>
    );
}

export default ExpensesOverview;

const styles = StyleSheet.create({
    expensesContainer:{
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.background
    }
})