import axios from "axios";

const db = 'https://spendwise-e17c8-default-rtdb.europe-west1.firebasedatabase.app/'

export async function storeDBExpense(expsenseData){
    const response = await axios.post(db + 'expenses.json', expsenseData)
    const id = response.data.name
    return id
}
export async function getExpenses(){
    const response = await axios.get(db + 'expenses.json')
    const expenses = []
    for ( const key in response.data){
        const expense = {
            id: key,
            amount: response.data[key].amount,
            desc: response.data[key].desc,
            date: response.data[key].date
        }
        expenses.push(expense)
    }
    return expenses
}
export function putDBExpense(id, expenseData){
    return axios.put(db + `expenses/${id}.json`, expenseData)
}

export function deleteDBExpense(id){
    return axios.delete(db + `expenses/${id}.json`)
}
