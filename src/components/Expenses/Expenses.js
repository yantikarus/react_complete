import React from 'react'
import Card from '../UI/Card'
import { useState } from 'react'
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


const Expenses = ({ expenses }) => {

  const [filteredYear, setFilteredYear] = useState(" ")

  const handleFilter = year => {
    setFilteredYear(year)
  }

  const filterData = expenses.filter(x => (x.date.getFullYear()) === Number(filteredYear))
  
  return (
    <div>

      <Card className="expenses">
        <ExpensesFilter onFilter={handleFilter} />
        <ExpensesChart exp={filterData}/>
         {/* double && means if the left part evaluates to true the right part will execute */}
        {/* {filterData.length === 0 && <p> No expenses found</p>}
        {filterData.length > 0 &&
        filterData.map(item=> < ExpenseItem key={item.id} amount={item.amount} title={item.title} date={item.date}/>)} */}
        <ExpensesList item={filterData}/>
        </Card>
    </div>
  )
}

export default Expenses