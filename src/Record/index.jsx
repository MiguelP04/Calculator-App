import React from "react";
import "./record.css"


function Record({recordOperations}){

    return (
        <article className="container-record">
            <p className="record-operations">
             {recordOperations.map((elemento) => {
                return <li className="record-operator">{ elemento}</li>
             })}
            </p>
        </article>

    )
}

export { Record }