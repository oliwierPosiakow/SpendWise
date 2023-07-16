import {createSlice} from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState:{
        expenses: [],
    },
    reducers: {
        //adding object
        addExpense: (state, action) => {
            state.expenses.unshift({
                id: action.payload.id,
                amount: action.payload.expenseData.amount,
                desc: action.payload.expenseData.desc,
                date: action.payload.expenseData.date
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
        updateExpense: (state, action) => {
            //find an index to update
            const updateItemIndex = state.expenses.findIndex((expense) => expense.id === action.payload.id)
            //get the expense from given index
            const updateExpense = state.expenses[updateItemIndex]
            //new, updated expense
            const newUpdateExpense = {...updateExpense, ...action.payload.expenseData}
            //new array of expenses
            const updatedExpenses = [...state.expenses]
            //setting new expense in new array
            updatedExpenses[updateItemIndex] = newUpdateExpense
            state.expenses = updatedExpenses
        },
        setExpenses: (state, action) => {
            const inverted = action.payload.reverse()
            state.expenses = inverted
        }
    }
})

export const addExpense = expensesSlice.actions.addExpense
export const removeExpense = expensesSlice.actions.removeExpense
export const updateExpense = expensesSlice.actions.updateExpense
export const  setExpenses = expensesSlice.actions.setExpenses
export default expensesSlice.reducer