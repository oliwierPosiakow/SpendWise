import React, {useEffect, useLayoutEffect} from 'react';
import {Text, View, StyleSheet} from "react-native";
import IconButton from "../UI/IconButton";
import {COLORS} from "../constants/COLORS";
import Button from "../UI/Button";
import {useDispatch} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../redux/expenses";

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
    function addExpenseHandler(){
        if(!isEditing){
            dispatch(addExpense({
                expenseData:{
                    desc: 'Test!!!',
                    amount: 29.99,
                }}
            ))
        }
        else{
            dispatch(updateExpense({
                id: expenseId,
                expenseData:{
                    description: 'Test Update',
                    amount: 19.99,
                    date: new Date('2023-07-06').toDateString()
                }
            }))
        }

        navigation.goBack()
    }
    function cancelHandler(){
        navigation.goBack()
    }

    return (
        <View style={styles.manageContainer}>
            <Text>{expenseId}</Text>
            <View style={styles.buttonWrapper}>
                <Button mode={'flat'} onPress={cancelHandler} style={styles.btn}>Cancel</Button>
                <Button onPress={addExpenseHandler} style={styles.btn}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    buttonWrapper:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
        gap: 10,
    },
    btn:{
        width: 120,
        marginHorizontal: 10,
    }
})