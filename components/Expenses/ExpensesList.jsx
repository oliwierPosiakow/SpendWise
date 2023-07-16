import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpense(itemData) {
    return <ExpenseItem {...itemData.item}/>
}
function ExpensesList({expenses}) {
    return (
        <View style={styles.list}>
            <FlatList
                data={expenses}
                renderItem={renderExpense}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default ExpensesList;

const styles = StyleSheet.create({
    list:{
        marginVertical: 10,
    }
})

