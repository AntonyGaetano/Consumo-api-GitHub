
import React from "react";
import ImgReserva from "./img/ponto-de-interrogacao.png";

export default function Header(props){

    var estilo_section = {
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        width:"100%",
        justifyContent:"center",
       alignItems:"center",
       gap:".1rem",
       margin:".7rem 0"
    }

return(
    <section style={estilo_section}>
     <img style={{width:"135px", borderRadius:"50%", boxShadow:"0px 0px 10px black"}} src={props.imagem?props.img_link:ImgReserva}/>

     <h3>{props.nome}</h3>
    </section>
)
}