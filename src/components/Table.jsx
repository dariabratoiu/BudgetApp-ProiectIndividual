import React from 'react'
import { ExpenseItem } from './ExpenseItem'

const Table = ({expenses}) => {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                    {
                        ["Nume", "Suma", "Data", "Budget", ""].map((i, index) => (
                            <th key={index}>{i}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense)=> (
                        <tr key={expense.id}>
                            <ExpenseItem expense={expense}/>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table