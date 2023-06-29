import React from 'react';
import {Text} from "react-native";
import ExpensesOverview from "../components/Expenses/ExpensesOverview";

function AllScreen(props) {
    return (
        <ExpensesOverview period={'Total'}/>
    );
}

export default AllScreen;