import { useRouteError, Link, useNavigate} from "react-router-dom"

import {HomeIcon, ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

const Error = () => {
  const error=useRouteError();
  const navigate=useNavigate();
  console.log("~Error~ error", error)
    return (
      <div className="error"> 
        <h1>O, nu! Am întâmpinat o problemă!</h1>
        <p>{error.message || error.statusText}</p>
        <div className="flex-md">
          <button 
            className="btn btn--dark" 
            onClick={() => navigate(-1)}
          >
            <ArrowUturnLeftIcon width={20}/>
            <span>Mergi Înapoi</span>
          </button>
          <Link
          to="/"
          className="btn btn--dark"
          >
          <HomeIcon width={20}/>
          <span>Mergi Acasă!</span>
          </Link>
        </div>
      </div>
    )
  }
  export default Error