import React from 'react';
import {Text} from "react-native";
import ExpensesOverview from "../components/Expenses/ExpensesOverview";
import {useSelector} from "react-redux";

function AllScreen(props) {

    const expensesStore = useSelector(state => state.expenses.expenses)

    return (
        <ExpensesOverview expenses={expensesStore} period={'Total'}/>
    );
}

export default AllScreen;