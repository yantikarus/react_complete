import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {
    const [ showDialog, setShowDialog ] = useState(false)
    const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData = {
        ...enteredExpenseData, 
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
    setShowDialog(false)
    }
  const clickHandler=()=>{
    console.log("button inside new Expense is clicked")
    setShowDialog(true)
  }
    const cancelDialog= ()=>{
    console.log("cancel btn is clicked at app .js")
    setShowDialog(false)
  }
  return (
    <div className='new-expense'>
      {showDialog ? 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} handleCancel ={cancelDialog}/> :
        <button onClick={clickHandler}>Add New Expense</button> }
        </div>
  )
}

export default NewExpense