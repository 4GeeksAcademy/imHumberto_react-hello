import React from "react";

const CardSingle = () => {
    return(
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                
                <div className="card-header">
                    <img class="img-fluid" src="https://plus.unsplash.com/premium_photo-1669842336799-36d654504274?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" sizes="" srcset="" />
                </div>

                <div className="card-body">
                    <h1 className="card-title pricing-card-title">Card tittle</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perspiciatis assumenda, vero beatae est reiciendis voluptatum similique dolor odit vitae, earum veniam nobis. Dolorem, iste ipsam dolore praesentium tempore nisi.
                    </p>
                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Find out more</button>
                </div>
            </div>
        </div>
    )
}

export default CardSingle