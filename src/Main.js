
import React from "react";

export default function Main(props){

return(
    <section>
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