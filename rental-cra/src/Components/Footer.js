import React from "react"

function Footer(){
    return(
            <>
            <div className="footer">
                <div className="container">
                    <div className="row" style={{marginTop:'30px'}}>
                        <div className="col-sm-4">
                            <h4 id="LVRT">L'VRT</h4>
                            <p id="LVRT">Lorem ipsum dolor sit amet, consectetur<br></br>
                                adipiscing sagittis, sapricun dulli mulvuttis clui,<br></br>
                                rican pulvinar sagittis, sapician duli milttis clui,<br></br>
                                raceris pulvinar lorem felis tvec erat</p>
                        </div>
                        <div className="col-sm-4">
                            <h4>Contact Info</h4>
                            <h5>100 W Rinocon<br></br>
                                San Franscisco, CA 94015
                            </h5>
                            <h5>1 (800)-539-5565</h5>
                            <h5>Rod12@gmail.com</h5>
                        </div>
                        <div className="col-sm-4">
                            <h4>Social Media</h4>
                            <div className="Block"><a target='_blank' href="https://facebook.com/rodney.smith"><i className="fab fa-facebook"></i></a></div>
                            <div className="Block2"><a target='_blank' href="https://twitter/com/rodney.smith"><i className="fab fa-twitter"></i></a></div>
                            <div className="Block3"><a target='_blank' href="https://linkedin.com/in/rodneysmith"><i className="fab fa-linkedin"></i></a></div>
                            <div className="Block4"><a target='_blank' href=" https://github.com/RodneySmith12"><i className="fab fa-github-square"></i></a></div>
                            <div className="Block5"></div>
                            <div className="Block6"></div>
                            <div className="Block7"></div>
                            <div className="Block8"></div>
                        </div>
                        {/*<!-- <ul>
                            <li><a target='_blank' href="https://facebook.com/rodney.smith"></a><i className="fab fa-facebook"></i></li>
                            <li><a target='_blank' href="https://twitter/com/rodney.smith"><i className="fab fa-twitter"></i></a></li>
                            <li><a target='_blank' href="https://linkedin.com/in/rodneysmith"><i className="fab fa-linkedin"></i></a></li>
                            <li><a target='_blank' href="https://github.com/rodney-smith"><i className="fab fa-github-square"></i></a></li>
                        </ul> -->*/}
                    </div>
                </div>
            </div>
            </>
    )
}

export default Footer