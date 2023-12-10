export const waait = () => new Promise(res => setTimeout(res, Math.random() * 1000))

const generateRandomColor=() => {
    const existingBudgetLength= fetchData("budgets") ?. length ?? 0;
    return `${existingBudgetLength * 34} 64% 50%`
}

//pt local storage
export const fetchData= (key) => {
    return JSON.parse(localStorage.getItem(key));
};

//ia tot ce e din local storage



//creare  buget
export const createBudget=({
    name, amount
}) => {
    const newItem ={ 
        id: crypto.randomUUID(),
        name: name,
        createdAt:Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgts=fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgts, newItem]))
}

//creare cost
export const createExpense=({
    name, amount, budgetId
}) => {
    const newItem ={ 
        id: crypto.randomUUID(),
        name: name,
        createdAt:Date.now(),
        amount: +amount,
        budgetID: budgetId,
    }
    const existingExpenses=fetchData("expenses") ?? [];
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))
}

//sterge item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
      // check if expense.id === budgetId I passed in
      if (expense.budgetId !== budgetId) return acc
  
      // add the current amount to my total
      return acc += expense.amount
    }, 0)
    return budgetSpent;
  }
  
  
  // FORMATTING
  
  // Formating percentages
  export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits: 0,
    })
  }
  
  // Format currency
  export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
      style: "currency",
      currency: "RON"
    })
  }

  export const formatDateToLocalString=(epoch) => new Date(epoch).toLocaleDateString();