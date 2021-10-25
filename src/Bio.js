
import React from "react";

export default function Bio(props){


    
     var estilo_section = {
       display:"flex",
       flexDirection:"column",
       flexWrap:"wrap",
       width:"100%",
       border:"1x solid",
       justifyContent:"center",
       alignItems:"center",
       gap:"1rem"
    }

    var estilo_divs = {
        width:"300px",
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
        padding:"1rem 0.3rem",
        borderRadius:"0px",
        boxShadow:"0px 0px 6px gray"
     }

return(
    <section style={estilo_section}>
      <div style={estilo_divs}>
       <p>Biografia:</p>
       <span>{props.bio === null ? "sem bio":props.bio}</span>
      </div>
    <p>Contato:</p>
    <span>{props.contato}</span>
    </section>
)
}