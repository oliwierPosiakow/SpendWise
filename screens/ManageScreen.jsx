import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import IconButton from "../UI/IconButton";
import {COLORS} from "../constants/COLORS";
import {useDispatch, useSelector} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../redux/expenses";

import ExpenseForm from "../components/Expenses/ExpenseForm";
import {deleteDBExpense, putDBExpense, storeDBExpense} from "../util/http";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

function ManageScreen({route, navigation}) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
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
        setIsLoading(true)
        try{
            dispatch(removeExpense({id: expenseId}))
            await deleteDBExpense(expenseId)
            navigation.goBack()
        }
        catch (e) {
            setError('Something went wrong.')
        }
        setIsLoading(false)
    }
    async function addExpenseHandler(expenseData){
        setIsLoading(true)
        try{
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
       catch (e) {
           setError('Something went wrong.')
           setIsLoading(false)
       }
    }
    function cancelHandler(){
        navigation.goBack()
    }

    function errorHandler(){
        setError(null)
    }

    if(error && !isLoading){
        return <Error message={error} onConfirm={errorHandler}/>
    }
    if(isLoading){
        return <Loading/>
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