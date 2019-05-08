import React, { Component } from 'react'
import {BrowserRouter as Router ,Route, Redirect, Switch} from 'react-router-dom'
import TopNav from "./Components/topNav"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Rent from "./Components/rent"
import Register from "./Components/Register"
import SingleProduct from "./Components/Singleproduct"
import About from "./Components/About"

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <TopNav/>
        <Switch>
          <Route exact={true} path="/" component={Content} />
          <Route path="/rent" component={Rent} />
          <Route path="/vehicle/:id" component={SingleProduct} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer/>
      </Router>
      </>
    )
  }
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Header/>
//         <Route exact={true} path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//         <Route path="/services" component={Services}/>
//         <Footer />
//       </Router>
//     )
//   }
// }
