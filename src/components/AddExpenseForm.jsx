import { useEffect, useRef } from "react"

// rrd imports
import { useFetcher } from "react-router-dom"

// library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid"

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset()
      // reset focus
      focusRef.current.focus()
    }

  }, [isSubmitting])

  return (
    <div className="form-wrapper">
      <h2 className="h3">Adauga cost nou in {" "}<span className="accent">
        {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
      </span>
      </h2>
      <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
      >
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Numele costului</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="ex.: Suc"
              ref={focusRef}
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Sumă</label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="ex.: 7.59"
              required
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Categoria din care se încadrează bugetul</label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>
            {
              budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budget) => {
                  return (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  )
                })
            }
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {
            isSubmitting ? <span>Se încarcă...</span> : (
              <>
                <span>Adaugă Cost</span>
                <PlusCircleIcon width={20} />
              </>
            )
          }
        </button>
      </fetcher.Form>
    </div>
  )
}
export default AddExpenseForm