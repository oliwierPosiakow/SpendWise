import React, {useEffect, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";
import IconButton from "../UI/IconButton";
import {COLORS} from "../constants/COLORS";
import Button from "../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../redux/expenses";

import ExpenseForm from "../components/Expenses/ExpenseForm";
import {storeDBExpense, putDBExpense, deleteDBExpense} from "../util/http";
function ManageScreen({route, navigation}) {

    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    const activeExpense = useSelector(state => state.expenses.expenses).find(expense => expense.id === expenseId)

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    },[navigation, isEditing])

    async function deleteExpense() {
        dispatch(removeExpense({id: expenseId}))
        await deleteDBExpense(expenseId)
        navigation.goBack()
    }
    async function addExpenseHandler(expenseData){
        if(!isEditing){
            const id = await storeDBExpense(expenseData)
            dispatch(addExpense({
                id: id,
                expenseData: {...expenseData}
            }))
        }
        else{
            dispatch(updateExpense({
                id: expenseId,
                expenseData: {...expenseData}
            }))
            await putDBExpense(expenseId,expenseData)
        }
        navigation.goBack()
    }
    function cancelHandler(){
        navigation.goBack()
    }

    return (
        <View style={styles.manageContainer}>
            <ExpenseForm onSubmit={addExpenseHandler} onCancel={cancelHandler} submitButtonLabel={isEditing? 'Update' : 'Add'} defaultValues={activeExpense}/>
            {isEditing && (
                <View style={styles.deleteBtn}>
                    <IconButton name={'trash'} color={COLORS.accent2} size={30} onPress={deleteExpense}/>
                </View>
            )}
        </View>
    );
}

export default ManageScreen;

const styles = StyleSheet.create({
    manageContainer:{
        backgroundColor: COLORS.background,
        flex: 1,
        padding: 10,
    },
    deleteBtn:{
        paddingVertical: 10,
        borderTopColor: COLORS.primary,
        borderTopWidth: 5,
        alignItems: "center"
    },
})