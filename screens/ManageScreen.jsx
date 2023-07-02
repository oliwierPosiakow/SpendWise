import React, {useEffect, useLayoutEffect} from 'react';
import {Text, View, StyleSheet} from "react-native";
import IconButton from "../UI/IconButton";
import {COLORS} from "../constants/COLORS";
import Button from "../UI/Button";

function ManageScreen({route, navigation}) {

    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    },[navigation, isEditing])

    function deleteExpense() {
        navigation.goBack()
    }
    function addExpense(){
        navigation.goBack()
    }
    function cancelHandler(){
        navigation.goBack()
    }

    return (
        <View style={styles.manageContainer}>
            <View style={styles.buttonWrapper}>
                <Button mode={'flat'} onPress={cancelHandler} style={styles.btn}>Cancel</Button>
                <Button onPress={addExpense} style={styles.btn}>{isEditing ? 'Update' : 'Add'}</Button>
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