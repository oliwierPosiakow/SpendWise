import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Input from "./Input";
import {COLORS} from "../../constants/COLORS";
import {tr} from "date-fns/locale";
import {useState} from "react";
import Button from "../../UI/Button";

function ExpenseForm({onCancel, onSubmit, submitButtonLabel}) {
    const [formData, setFormData] = useState({
        amount: '',
        date: '',
        desc: '',
    })

    function inputChangedHandler(inputId,enteredAmount){
        setFormData((prevState) => {
            return {...prevState, [inputId]: enteredAmount}
        })
    }

    function submitHandler(){
        const expenseData = {
            amount: +formData.amount.replace(',','.'),
            date: new Date(formData.date).toDateString(),
            desc: formData.desc
        }
        onSubmit(expenseData)
    }

    return (
        <View>
            <Input labelText={'Description:'} inputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'desc'),
                value: formData.desc
            }}/>
            <View style={styles.dateAmountWrapper}>
                <Input style={styles.input} labelText={'Amount:'} inputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: formData.amount
                }}/>
                <Input style={styles.input} labelText={'Date:'} inputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    placeholderTextColor: '#747474',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: formData.date
                }}/>
            </View>
            <View style={styles.buttonWrapper}>
                <Button mode={'flat'} onPress={onCancel} style={styles.btn}>Cancel</Button>
                <Button onPress={submitHandler} style={styles.btn}>{submitButtonLabel}</Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    dateAmountWrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    input:{
        flex:1,
    },
    buttonWrapper:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
        gap: 10,
    },
    btn:{
        width: 120,
        marginHorizontal: 10,
    }
})