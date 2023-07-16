import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Input from "./Input";
import {COLORS} from "../../constants/COLORS";
import Button from "../../UI/Button";

function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValues}) {
    const [formData, setFormData] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? defaultValues.date : '',
            isValid: true
        },
        desc: {
            value: defaultValues ? defaultValues.desc : '',
            isValid: true
        },
    })

    const formIsValid = !formData.desc.isValid || !formData.amount.isValid || !formData.date.isValid

    function inputChangedHandler(inputId,enteredAmount){
        setFormData((prevState) => {
            return {
                ...prevState,
                [inputId]: {value: enteredAmount, isValid: true}
            }
        })
    }

    function submitHandler(){
        const expenseData = {
            amount: +formData.amount.value.replace(',','.'),
            date: new Date(formData.date.value).toDateString(),
            desc: formData.desc.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = !isNaN(Date.parse(expenseData.date))
        const descIsValid = expenseData.desc.trim().length > 0

        if(!amountIsValid || !dateIsValid || !descIsValid){
            setFormData((prevState) => {
                return {
                    amount: {value: prevState.amount.value, isValid: amountIsValid},
                    date: {value: prevState.date.value, isValid: dateIsValid},
                    desc: {value: prevState.desc.value, isValid: descIsValid}
                }
            })
            return
        }
        onSubmit(expenseData)
    }

    return (
        <View>
            <Input isValid={formData.desc.isValid} labelText={'Description:'} inputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'desc'),
                value: formData.desc.value
            }}/>
            <View style={styles.dateAmountWrapper}>
                <Input isValid={formData.amount.isValid} style={styles.input} labelText={'Amount:'} inputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: formData.amount.value
                }}/>
                <Input isValid={formData.date.isValid} style={styles.input} labelText={'Date:'} inputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    placeholderTextColor: '#747474',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: formData.date.value
                }}/>
            </View>
            {formIsValid && <Text style={styles.errorMsg}>Invalid Form - Please check your input values</Text>}
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
    },
    errorMsg:{
        color: COLORS.accent1,
        textAlign: "center",
        marginVertical: 10,
        fontSize: 16,
    }
})