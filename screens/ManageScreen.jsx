import React, {useEffect, useLayoutEffect} from 'react';
import {Text} from "react-native";

function ManageScreen({route, navigation}) {

    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    },[navigation, isEditing])

    return (
        <Text></Text>
    );
}

export default ManageScreen;