
import React,{useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Bio from "./Bio";


export default function Api(){

   const [nome, setnome] = useState("?")
   const [usuario, setusuario] = useState("?")
   const [imagem, setimagem] = useState(false)


   var estilo_input_button = {
       padding:"5px",

   }
 

    const ChamaAPi =() =>{
        fetch(`https://api.github.com/users/${nome}`)
        .then(res => res.json())
        .then(data=>{
              setimagem(true)
              setusuario(data)
        })
   }

   return(
       <main>
        <Header img_link={usuario.avatar_url} nome={usuario.name} imagem={imagem}/>

        <Main repositorio={usuario.public_repos}  followers={usuario.followers} following={usuario.following}/>

        <Bio bio={usuario.bio} />

        <input style={estilo_input_button} type="text" placeholder="Digite aqui" onChange={(e)=>setnome(e.target.value)}/>
        <button style={estilo_input_button}  onClick={()=>ChamaAPi()}>Buscar</button>
       </main>
   )
}