import React from 'react';
import {Text} from "react-native";
import ExpensesOverview from "../components/Expenses/ExpensesOverview";

function RecentScreen(props) {
    return (
        <ExpensesOverview period={'Last 7 Days'}/>
    );
}

export default RecentScreen;