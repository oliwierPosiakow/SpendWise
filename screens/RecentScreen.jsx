import React, {useEffect, useState} from 'react';
import ExpensesOverview from "../components/Expenses/ExpensesOverview";
import {useDispatch, useSelector} from "react-redux";
import {getDateMinusDays} from "../util/date";
import {getExpenses} from "../util/http";
import {setExpenses} from "../redux/expenses";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

function RecentScreen(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const expensesStore = useSelector(state => state.expenses.expenses)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchExpenses(){
            setIsLoading(true)
            try{
                const expenses = await getExpenses()
                dispatch(setExpenses(expenses))
            }
            catch (e){
                setError('Could not fetch data.')
            }
            setIsLoading(false)
        }
        fetchExpenses()
    },[])

    function errorHandler(){
        setError(null)
    }

    if(error && !isLoading){
        return <Error message={error} onConfirm={errorHandler}/>
    }

    const recentExpenses = expensesStore.filter((expense) => {
        const today = new Date()
        const date7Days = getDateMinusDays(today, 7)
        return Date.parse(expense.date) > Date.parse(date7Days)
    })
    if(isLoading){
        return (
            <Loading/>
        )
    }
    return (
        <ExpensesOverview period={'Last 7 Days'} expenses={recentExpenses} fallback={'No recent expenses found.'}/>
    );
}

export default RecentScreen;