import React from 'react';
import "./ItemList.css"


export const ItemList = ({ titulo, children,}) => {

    return (
        <section className="card-list">
            <h2 className= "card-list-name">
                {titulo}
            </h2>
            <article className="card-list-article">
                {children}
            </article>
        </section>
    );
}