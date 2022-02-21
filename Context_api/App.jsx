import React from 'react'
import Text from './Component/Context_api/Text'
import Expenses from './Component/Context_api/Expenses'
import List from './Component/Context_api/List'
import { ExpenseProvider } from './expenseContext'
// import expenses from './Component/Context_api/Expenses'

const App = () => {
  return (
    <div>
      <ExpenseProvider>
      <Expenses/>
      <Text/>
      <List/>
      </ExpenseProvider>
    </div>
  )
}

export default App