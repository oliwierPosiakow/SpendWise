import React, {useEffect, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";
import IconButton from "../UI/IconButton";
import {COLORS} from "../constants/COLORS";
import Button from "../UI/Button";
import {useDispatch} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../redux/expenses";

import ExpenseForm from "../components/Expenses/ExpenseForm";
function ManageScreen({route, navigation}) {

    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    },[navigation, isEditing])

    function deleteExpense() {
        dispatch(removeExpense({id: expenseId}))
        navigation.goBack()
    }
    function addExpenseHandler(expenseData){
        if(!isEditing){
            dispatch(addExpense({
                expenseData: {...expenseData}
            }))
        }
        else{
            dispatch(updateExpense({
                id: expenseId,
                expenseData: {...expenseData}
            }))
        }
        navigation.goBack()
    }
    function cancelHandler(){
        navigation.goBack()
    }

    return (
        <View style={styles.manageContainer}>
            <ExpenseForm onSubmit={addExpenseHandler} onCancel={cancelHandler} submitButtonLabel={isEditing? 'Update' : 'Add'}/>
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