import React from 'react';
import {View} from "react-native";
import Input from "./Input";
import {COLORS} from "../../constants/COLORS";
import {tr} from "date-fns/locale";

function ExpenseForm() {

    function amountChangedHandler(){

    }

    return (
        <View>
            <Input labelText={'Description:'} inputConfig={{
                multiline: true,
                onChangeText: () => {}
            }}/>
            <Input labelText={'Amount:'} inputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangedHandler,
            }}/>
            <Input labelText={'Date:'} inputConfig={{
                placeholder: 'YYYY-MM-DD',
                placeholderTextColor: '#747474',
                maxLength: 10,
                onChangeText: () => {}
            }}/>
        </View>
    );
}

export default ExpenseForm;