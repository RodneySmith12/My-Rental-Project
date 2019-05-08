import React from "react"

function ProductTile(props) {
    return (
        <>
        <div className="col-sm-3">
            <a href={`/vehicle/${props.id}`}><img src={"images/" + props.image} style={{height: '200px',  width: '350px'}} className="img-responsive"/></a>
            <h4>{props.model} <br/>Price: ${props.price}<br/></h4>
            <button onClick="Product1()">Add to Cart</button>
        </div>
        </>
    )
}
export default ProductTile