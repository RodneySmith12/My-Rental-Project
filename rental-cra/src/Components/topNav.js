import React from "react"

function TopNav(){
    return(
        <div className="Navbar"style={{color:'black'}}>
            <ul>
                <li><a href="/" id="Home" style={{color:'black'}}>Home</a></li>
                <li><a href="/about" id="About" style={{color:'black'}}>About</a></li>
                <li><a href="/rent" id="/rent" style={{marginRight:'150px', color:'black'}}>Rent</a></li>
                <li><a href="/ApprovedFeatures" id="ApprovedFeatures" style={{color:'black'}}>Approved Features</a></li>
                <li><a href="/FAQ" id="FAQ" style={{color:'black'}}>FAQ</a></li>
                <li><a href="/register" id="Register" style={{color:'black'}}>Register</a></li>
                {/* <!-- <div class="dropdown">
                    <a href="">Register</a>
                    <div class="dropdown-content">
                        <i class="fas fa-caret-up"></i>
                        <a href="">Reserve</a>
                        <a href="">View/Modify/Cancel</a>
                    </div> --> */}
            </ul> 
        </div>
    )
}

export default TopNav