/* eslint-disable react-refresh/only-export-components */
// rrd imports
import { Link, useLoaderData } from "react-router-dom";

//  helper functions
import { createBudget, createExpense, fetchData, waait } from "../helpers"
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";

//import { toast } from "react-toastify";



// loader
export function dashboardLoader() { 
  const userName = fetchData("userName");
  const budgets=fetchData("budgets");
  const expenses=fetchData("expenses");

  return { userName , budgets, expenses};
}


export async function dashboardAction({request}){

  await waait();
  const data=await request.formData();
  const {_action, ...values}=Object.fromEntries(data)
  //new usere submition
  if(_action==="newUser"){
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName))
      return toast.success(`Bine ai venit, ${values.userName}!`)
    } catch(e) {
      throw new Error("Contul nu s-a putut crea!")
    } 
  }

  if(_action==="createBudget"){
    try{
      //creare buget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      })

      return toast.success("Buget Creat")
    } catch(e){
      throw new Error("Am întâmpinat o problemă în crearea bugetului!")
    }
  }

  
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgettId: values.newExpenseBudget
      })
      return toast.success(`Cost creat!`)
    } catch (e) {
      throw new Error("Am întâmpinat o problemă!")
    }
  }


}


const Dashboard = () => {
  const { userName , budgets, expenses } = useLoaderData()

  return (
    <>
      {userName ? (
      <div className="dashboard">
        <h2>Bine ai venit, <span className="accent">{userName}</span></h2>
        <div className="grid-sm">
        {
              budgets && budgets.length > 0
                ? (
                  <div className="grid-lg">
                    <div className="flex-lg">
                      <AddBudgetForm />
                      <AddExpenseForm budgets={budgets}/>
                    </div>
                    <h2>Existing Budgets</h2>
                    <div className="budgets">
                      {
                        budgets.map((budget) => (
                          <BudgetItem key={budget.id} budget={budget} />
                        ))
                      }

                    </div>
                    {
                      expenses && expenses.length>0 && (
                        <div className="grid-md">
                          <h2>Costuri recente</h2>
                          <Table expenses={expenses
                            .sort((a,b) => b.createdAt - a.createdAt
                            )
                            .slice(0,8)} 
                            />
                            {expenses.length>8 && (
                              <Link
                              to="expenses"
                              className="btn btn--dark"
                              >
                                Vizualizează toate costurile!
                              </Link>
                            )}
                        </div>
                      )
                    }
                  </div>
                )
                : (
                  <div className="grid-sm">
                    <p>Gestionarea banilor intr-un mod usor.</p>
                    <p>Incepe calatoria catre un buget fericit.</p>
                    <AddBudgetForm />
                  </div>
                )
            }
        </div>
      </div>
      ) :  <Intro />}
    </>
  )
}
export default Dashboard