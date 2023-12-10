/* eslint-disable react-refresh/only-export-components */
// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

//assets 
import baraJos from "../assets/baraJos.svg"

//  helper functions
import { fetchData } from "../helpers"
import Nav from "../components/Nav";


// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  return (
    <div className="layout">
      <Nav userName={userName}/>
      <main>
        <Outlet />
      </main>
      <img src={baraJos} alt="" />
    </div>
  )
}
export default Main