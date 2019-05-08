import React, { Component } from 'react'
import ProductTile from "./productTile"

//class component allows you to change state
class Rent extends Component { //<<<<<<<<<<<<<----<<<<<<<<<<<<<<<<<<<<<<<---<<^
    //constructor is a specific method that initializes parts of this class---^
    constructor() {
        super() 
        //this.state = the data that a component maintains, & it can change its value
        this.state = {
            loading: true,
            products: []
        }

    }
    componentDidMount() {
        fetch("http://localhost:8000/api/product")
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                loading: false,
                products: responseData
            })
        })
    }
    render() {
        let products = this.state.loading ? "Loading" : this.state.products.map((item, i) => {
            return <ProductTile key={i} {...item} />
        })
        return(
                <>
             <div>
                <div className="InPut" style={{padding:'35px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <input type="date" id="input12" placeholder="Start Date"/>
                            </div>
                            <div className="col-sm-4">
                                <input type="date" id="input13" placeholder="Return date"/>
                            </div>
                            <div className="col-sm-4">
                                <input type="date" id="input14" placeholder="Search cars"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                <h3 style={{marginLeft:'200px'}}><bold>Featured Categories</bold></h3>
                <div className="container"> 
                    <div className="row">
                        {products}
                    </div>
                </div>
                </>
        )
    }
}

export default Rent