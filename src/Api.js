
import React,{useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Bio from "./Bio";


export default function Api(){

   const [nome, setnome] = useState("?")
   const [usuario, setusuario] = useState("?")


 

    const ChamaAPi =() =>{
        fetch(`https://api.github.com/users/${nome}`)
        .then(res => res.json())
        .then(data=>{
              console.log(data)
              console.log(data.name)
              console.log(data.public_repos)
              console.log(data.location)
              console.log(data.followers)
              console.log(data.following)
              console.log(data.blog)
            
              setusuario(data)
        })
   }

   return(
       <main>
        <Header img={usuario.avatar_url} nome={usuario.name}/>

        <Main repositorio={usuario.public_repos} location={usuario.location} followers={usuario.followers} following={usuario.following}/>

        <Bio bio={usuario.bio} contato={usuario.blog}/>

        <input type="text"  onChange={(e)=>setnome(e.target.value)}/>
        <button onClick={()=>ChamaAPi()}>Buscar</button>
       </main>
   )
}