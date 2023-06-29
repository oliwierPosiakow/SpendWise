import React from 'react';
import {View, StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {COLORS} from "../../constants/COLORS";

const dummy = [
    {
        id: 1,
        amount: 12.49,
        desc: 'McDonalds',
        date: new Date('2021-12-22')
    },
    {
        id: 2,
        amount: 105.49,
        desc: 'Koszulka Nike',
        date: new Date('2021-12-25')
    },
    {
        id: 3,
        amount: 5.49,
        desc: 'Coca-Cola',
        date: new Date('2021-12-25')
    },
    {
        id: 4,
        amount: 35.49,
        desc: 'Obiad',
        date: new Date('2022-01-17')
    },
]
function ExpensesOverview({expenses, period}) {
    return (
        <View style={styles.expensesContainer}>
            <ExpensesSummary expenses={dummy} periodName={period}/>
            <ExpensesList expenses={dummy}/>
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