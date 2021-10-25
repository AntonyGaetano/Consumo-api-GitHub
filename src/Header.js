
import React from "react";

export default function Header(props){

return(
    <>
     <img style={{width:"100px", borderRadius:"50%"}} src={props.img}/>

     <h3>{props.nome}</h3>
    </>
)
}