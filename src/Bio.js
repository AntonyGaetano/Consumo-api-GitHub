
import React from "react";

export default function Bio(props){

return(
    <>
    <p>Biografia:</p>
    <span>{props.bio}</span>
    <p>Contato:</p>
    <span>{props.contato}</span>
    </>
)
}