import React from 'react'
import Balance from './Component/Balance_inquiry/Balance'
import { ReducerContext, ReducerProvider } from './ReducerContext'

const App = () => {
  return (
    <div>
      <ReducerProvider>
        <Balance/>
      </ReducerProvider>
    </div>
  )
}

export default App