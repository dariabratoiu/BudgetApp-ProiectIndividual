//import React from 'react'
import { Form, NavLink } from "react-router-dom"
import logoRoz from "../assets/logoRoz.svg"
import { TrashIcon } from "@heroicons/react/24/solid"

// eslint-disable-next-line react/prop-types
const Nav = ({userName}) => {
  return (
    <nav>
      <NavLink
      to="/"
      aria-label="Mergi la pagina principala"
      >
      <img src={logoRoz} alt="" height={30}/>
      <span>Budget App</span>
      </NavLink>
      {
        userName && (
          <Form
          method="post"
          action="/logout"
          onSubmit={(event) =>{
            if(!confirm("Sterge Utilizatorul și toate datele acestuia")){
              event.preventDefault()
            }
          }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Sterge Utilizatorul</span>
              <TrashIcon width={20}/>

            </button>

          </Form>
        )
      }
    </nav>
  )
}

export default Nav