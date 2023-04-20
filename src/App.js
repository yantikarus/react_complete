import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";


const INITIAL = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2',
    title: 'Insurance',
    amount: 104.12,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e3',
    title: 'Books',
    amount: 34.12,
    date: new Date(2023, 2, 20),
  },
  {
    id: 'e4',
    title: 'Noodles',
    amount: 10.12,
    date: new Date(2023, 4, 14),
  },
]


function App() {
  const [addExpense, setAddExpense] = useState(INITIAL)
  // const [ showDialog, setShowDialog ] = useState(false)

  const addExpenseHandler = singleExpense => {
    setAddExpense(addExpense.concat(singleExpense))
    console.log("in app js")
    console.log(singleExpense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={addExpense} />
      <p>I am a software developer</p>
    </div>
  );
}

export default App;
