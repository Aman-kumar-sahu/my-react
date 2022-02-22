import React from 'react'
import { BalanceContext, BalanceProvider } from './balanceContext'
import Balance from './Component/Balance_inquiry/Balance'

const App = () => {
  return (
    <div>
      <BalanceProvider>
      <Balance/>
      </BalanceProvider>
      </div>
  )
}

export default App