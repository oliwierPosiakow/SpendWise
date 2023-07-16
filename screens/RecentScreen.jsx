import React, {useEffect, useState} from 'react';
import {Text} from "react-native";
import ExpensesOverview from "../components/Expenses/ExpensesOverview";
import {useDispatch, useSelector} from "react-redux";
import {getDateMinusDays} from "../util/date";
import {getExpenses} from "../util/http";
import {setExpenses} from "../redux/expenses";

function RecentScreen(props) {
    const expensesStore = useSelector(state => state.expenses.expenses)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchExpenses(){
            const expenses = await getExpenses()
            dispatch(setExpenses(expenses))
        }
        fetchExpenses()
    },[])

    const recentExpenses = expensesStore.filter((expense) => {
        const today = new Date()
        const date7Days = getDateMinusDays(today, 7)
        return Date.parse(expense.date) > Date.parse(date7Days)
    })
    return (
        <ExpensesOverview period={'Last 7 Days'} expenses={recentExpenses} fallback={'No recent expenses found.'}/>
    );
}

export default RecentScreen;