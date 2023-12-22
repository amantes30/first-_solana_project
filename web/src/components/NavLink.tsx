import { Link } from "react-router-dom";

export function CustomNavLink({linktext, link} : {linktext : string, link : string}){
    return(
      <>
      <Link to={"/" + link}>{linktext}</Link>
      {/* <h2>Heloooo</h2> */}
  
      </>
    )
  }