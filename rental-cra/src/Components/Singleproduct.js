import React, { Component } from 'react'

class SingleProduct extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            product: {
                model: '',
                price: '',
                image: '',
                year:'',
                color:'',
                doors:''
            }
        }
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/product/" + this.props.match.params.id)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                loading: false,
                product: responseData[0]
            })
        })
    }
    render() {
        let product = this.state.product
        return (
            <div className="col-sm-12">
            <img src={"/images/" + product.image} style={{height: '200px',  width: '350px', marginLeft: '55px'}} className="img-responsive"/>
            <h4>{product.model} <br/>Price: ${product.price}<br/>Year:{product.year}<br/>Color:{product.color}<br/>Doors:{product.doors}<br/></h4>
            </div>            
        )
    }    
}

export default SingleProduct
