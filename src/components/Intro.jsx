//import React from 'react'

import { Form } from "react-router-dom"
import { UserPlusIcon} from "@heroicons/react/24/solid"
import omBaniIlustratie from "../assets/omBaniIlustratie.jpg"
const Intro = () => {
  return (
    <div className="intro">
        <div>
            <h1>
                Preia controlul asupra <span className="accent">banilor tai</span>
            </h1>
            <p>
                Gestionarea banilor intr-un mod usor. Incepe calatoria catre un buget fericit.
            </p>
            <Form method="post">
                <input 
                type="text" 
                name="userName" 
                required 
                placeholder="Cum te numești?" 
                aria-label="Numele tău" 
                autoComplete="given-name"
                />
                <input type="hidden" name="_action" value="newUser"/>
                <button type="submit" className="btn btn--dark">
                    <span>Crează Cont</span>
                    <UserPlusIcon with={20}/>
                </button>
            </Form>
        </div>
        <img src={omBaniIlustratie} alt="omBaniIlustratie" width={600}/>
    </div>
  )
}

export default Intro