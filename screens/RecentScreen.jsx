import React from 'react';
import {Text} from "react-native";
import ExpensesOverview from "../components/Expenses/ExpensesOverview";
import {useSelector} from "react-redux";
import {getDateMinusDays} from "../util/date";

function RecentScreen(props) {

    const expensesStore = useSelector(state => state.expenses.expenses)
    const recentExpenses = expensesStore.filter((expense) => {
        const today = new Date()
        const date7Days = getDateMinusDays(today, 7)
        return Date.parse(expense.date) > Date.parse(date7Days)
    })
    return (
        <ExpensesOverview period={'Last 7 Days'} expenses={recentExpenses}/>
    );
}

export default RecentScreen;