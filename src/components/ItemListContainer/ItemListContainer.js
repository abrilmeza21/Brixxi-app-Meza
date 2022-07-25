import React from "react";

const Titulo = (props) => {
    return(
        <h3  style={{display:"flex", justifyContent:"center", padding:"5px", fontSize:"2.8rem"}}>{props.Titulo}</h3>
    )
}


const ItemListContainer = () => {
    return(
                    <Titulo Titulo = "Hola"/>
    );
}




export default ItemListContainer



