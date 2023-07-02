import {createSlice} from "@reduxjs/toolkit";
import {dummy} from "../constants/DUMMY";
import {getFormattedDate} from "../util/date";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState:{
        expenses: dummy,
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push({
                id: action.payload.id,
                amount: action.payload.amount,
                desc: action.payload.desc,
                date: action.payload.date
            })
        },
        removeExpense: (state, action) => {
            state.expenses.splice(state.expenses.indexOf(action.payload.id)-1, 1)
        },
        updateExpense: (state, action) => {},
    }
})

export const addExpense = expensesSlice.actions.addExpense
export const removeExpense = expensesSlice.actions.removeExpense
export const updateExpense = expensesSlice.actions.updateExpense
export default expensesSlice.reducer