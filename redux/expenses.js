import {createSlice} from "@reduxjs/toolkit";
import {dummy} from "../constants/DUMMY";
import {getFormattedDate} from "../util/date";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState:{
        expenses: dummy,
    },
    reducers: {
        //adding object
        addExpense: (state, action) => {
            state.expenses.push({
                id: action.payload.id,
                amount: action.payload.amount,
                desc: action.payload.desc,
                date: action.payload.date
            })
        },
        //removing given object by id from an array
        removeExpense: (state, action) => {
            const expense = state.expenses.filter((expense) => {
                return expense.id === action.payload.id
            })
            state.expenses.splice(state.expenses.indexOf(expense[0]), 1)
        },
        //updating object by passing in parameters
        updateExpense: (state, action) => {},
    }
})

export const addExpense = expensesSlice.actions.addExpense
export const removeExpense = expensesSlice.actions.removeExpense
export const updateExpense = expensesSlice.actions.updateExpense
export default expensesSlice.reducer