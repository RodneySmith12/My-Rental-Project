import React from "react"

function Content(){
    return(
        <div>
            <div>
                <div className="Love1">
                    <div className="background-picture">
                            <div className="row">
                                <div className="col-sm-12">
                                        {/* <!-- <img src="images/exoticbackground.jpg" style="width: 100%;" alt="img-responsive"> --> */}
                                    <h1>"Love a Vehicle, Right For Travel"</h1>
                                    <h4>We have some of the highest quality extoic cars you would want! Live life to the fullest adipiscing elit, Nunc macimus, nulla ut commodo sagittis, sapiers dui<br/>
                                    mattiis dui, non pulvniar lorem felis nec erat</h4>
                                </div>
                            </div>
                            <div className="row" id="row1">
                                <div className="col-sm-6">
                                    <button id="button21">Rent Now</button>
                                </div>
                                <div className="col-sm-6">
                                    <button id="Love12">Learn More</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* // <!-- <div>
            //     <div className="InPut" style="padding:35px;">
                    
            //     </div>
            // </div> -->
            // <!-- <div className="container">
            //     <div className="row">
            //         <div className="InPut">
            //             <div className="col-sm-4">
                            
            //             </div>
            //             <div className="col-sm-4">

            //             </div>
            //             <div className="col-sm-4">
                            
            //             </div>
            //         </div>
                    
            //     </div>
            // </div> --> */}
            <div className="InPut">
                <div className="container">
                    <div className="row" id="row2">
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
            <div className="approved" id="Approved Features">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Approved Features</h1>
                            <h4>Lorem ipsum dolor sit consectetur adispscing elt, Nunc maximus, nulla commodo sagittis, saprien dui <br/>
                            mattis dui non pulvinar lorem fetis nect erat</h4>
                        </div>
                    </div>
                </div>          
            </div>
            <div className="main-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h2><i className="fas fa-dollar-sign"></i> Rent Online Save Time!</h2>
                            <p>Don’t waste your time, you can rent online! You can simply fill out our onlline<br />
                            rental contract that is fast and easy. Plus you can still get the best pricing<br />
                            and specials on our vehicle today. You can rent your exotic car from the comfort of your own<br />
                            computer, tablet, or smartphone anytime day or night!</p>
                        </div>
                        <div className="col-sm-3">
                            <h2><i className="fas fa-cog"></i>Featured Engineers</h2>
                            <p>Lorem ipsum sit amet, consecttur adipiscing elit,</p>
                        </div>
                        <div className="col-sm-3">
                            <h2><i className="fas fa-pencil-alt"></i>Rent before Purchase</h2>
                            <p>You have the option the rent any of our cars before you would like to purchase!<br />
                            We promise to assist your in any way shape form or fashion! We are here at you service!</p>
                        </div>
                        <div className="col-sm-3">
                            <h2><i className="fas fa-chalkboard"></i>Request Vehicle</h2>    
                            <p>We have plenty of exotic cars to rent from that are in your best interest!<br />
                                You can ride in a sporty ferrari or the best choice of your pick!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-market">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Product Features Section</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <h5><i className="fas fa-shield-alt"></i>We give the option of<br />
                            being able to buy customer speakers and subs with the choice of a Lamborghini Vehicle.</h5>
                        </div>
                        <div className="col-sm-4">
                            
                        </div>
                        <div className="col-sm-4">
                        <h5> <i className="fas fa-heart"></i>Any vehicle of<br />
                            choice can come with a custom set of rims and tire sizes.</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                        <h5> <i className="fas fa-coffee"></i>We can order special<br />
                        special light to go on the inside of the vehicle or above the wheels of the car.</h5>
                        </div>
                        <div className="col-sm-4">
                            
                        </div>
                        <div className="col-sm-4">
                            <h5><i className="fas fa-map-marker-alt"></i>If you would like<br />
                            customization to any specific part of the car we can get that done for you also. </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content