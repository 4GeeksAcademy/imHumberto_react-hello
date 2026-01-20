import React from "react";
import CardSingle from "./CardSingle";

const Cards = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 my-5 text-center p-5">

            <CardSingle/>
            <CardSingle/>
            <CardSingle/>
            <CardSingle/>

        </div>
    )
}

export default Cards