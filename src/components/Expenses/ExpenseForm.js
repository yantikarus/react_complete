import React from 'react'
import {useState} from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [title, setTitle]= useState("")
  const [amount, setAmount]= useState("")
  const [enteredDate, setEnteredDate]= useState("")

  const onSaveExpenseData  =  props.onSaveExpenseData
  // using one state as object
  // const [userInput, setUserInput]= useState({
  //   enteredTitle:" ",
  //   enteredAmount:" ",
  //   enteredDate:" "
  // })


  // const titleChangeHandler=(event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   })
  // }

  // const amountChangeHandler=(event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   })
  // }

  // const dateChangeHandler=(event)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   })
  // }

// console.log(userInput)

const titleChangeHandler=(event)=>{
    setTitle(event.target.value)
}
const amountChangeHandler=(event)=>{
  setAmount(event.target.value)
}
const dateChangeHandler=(event)=>{
  setEnteredDate(event.target.value)
}

// const handleCancelClick = ()=>{
//   console.log("cancel button is clico in form")
//   props.handleCancel(false)
// }

console.log(title, amount, enteredDate)
const submitHandler =(event)=>{
  event.preventDefault();
  const expenseData ={
    title:title,
    amount:+amount,
    date:new Date(enteredDate)
  }
  onSaveExpenseData(expenseData)
  // console.log(expenseData)
  setTitle("")
  setAmount("")
  setEnteredDate("")


}
  return (
    <form onSubmit={submitHandler}>
    <div>ExpenseForm</div>
    <div className='new-expense__control '>
        <label>Title</label>
        <input type="text" value ={title} onChange={titleChangeHandler}/>
    </div> 
    <div className='new-expense__control '>
        <label>Amount</label>
        <input type="number" value ={amount}  min="0.01" step="0.01" onChange={amountChangeHandler}/>
    </div> 
    <div className='new-expense__control '>
        <label>date</label>
        <input type="date" value ={enteredDate} min="2019-01-01" max= "2023-12-31" onChange={dateChangeHandler}/>
    </div> 
    <button type ="button" onClick = {props.handleCancel}>Cancel</button>   
    <button type='submit'>Add Expense</button>       
    </form>
  )
}

export default ExpenseForm