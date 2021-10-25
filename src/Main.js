
import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";

export default function Main(props){

  

  var estilo_section = {
     display:"flex",
     flexWrap:"wrap",
     width:"100%",
     border:"1x solid",
     justifyContent:"center",
    alignItems:"center",
    gap:"1rem"
  }

 var estilo_divs = {
    width:"90px",
    display:"flex",
    flexDirection:"column",
    border:"1px solid black",
    padding:"1.2rem 1rem",
    borderRadius:"10px",
    boxShadow:"0px 0px 6px gray",
    color:"white",
    backgroundColor:"#202124"
 }

return(
    <section style={estilo_section}>

     <div style={estilo_divs}>
       <p>Repository:</p>
       <span>{props.repositorio}</span>
     </div>

     <div style={estilo_divs}>
       <p>Followers:</p>
       <span>{props.followers}</span>
     </div>

     <div style={estilo_divs}>
      <p>Following:</p>
      <span>{props.following}</span>
     </div>

  
    </section>
)
}