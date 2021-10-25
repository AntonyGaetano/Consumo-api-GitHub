
import React from "react";

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

 

return(
    <section style={estilo_section}>
     <div>
       <p>Repository:</p>
       <span>{props.repositorio}</span>
     </div>

     <div>
       <p>Followers:</p>
       <span>{props.followers}</span>
     </div>

     <div>
      <p>Following:</p>
      <span>{props.following}</span>
     </div>

     <div>
      <p>Location:</p>
      <span>{props.location}</span>
    </div>
    </section>
)
}