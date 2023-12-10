
import { useFetcher } from "react-router-dom"
import {BanknotesIcon} from "@heroicons/react/24/solid"
import { useEffect, useRef } from "react"




const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef();
     const focusRef = useRef();

    useEffect(() => {
     if (!isSubmitting) {
         formRef.current.reset()
        focusRef.current.focus()
     }
     }, [isSubmitting])

     
  return (
    <div className="form-wrapper">
        <h2 className="h3">
            Crează bugetul
        </h2>
        <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
        >
            <div className="grid-xs">
                <label htmlFor="newBudget">Numele Bugetului</label>
                <input 
                    type="text" 
                    name="newBudget" 
                    id="newBudget"
                    placeholder="Nume Buget (ex.: Cumpărături săptămânale)"
                    required
                    ref={focusRef}
                />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgetAmount">Suma aferentă bugetului</label>
                <input 
                type="number"
                step="0.01"
                name="newBudgetAmount"
                id="newBudgetAmount"
                placeholder="Suma aferentă bugetului (ex.: 100)"
                required
                inputMode="decimal"
                />
            </div>
            <input type="hidden" name="_action" value="createBudget"/>
            <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                {
                    isSubmitting ? <span>Se adaugă...</span> : (
                        <>
                          <span>crează buget</span>
                          <BanknotesIcon width={20} />
                          </>
                    )
                }
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm