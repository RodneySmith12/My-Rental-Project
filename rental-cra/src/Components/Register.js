import React from 'react'
 
function Register(){
    return(
            
            <div className="Wrapper1">
                <div className="Wrapper">
                    <h1 style={{positon: 'relative', textAlign:'center'}}>Register For An Account</h1>
                    <p style={{positon: 'relative', textAlign:'center'}}>To sign-up for a free account please provide us with some basic information using
                    the contact form below. Please use valid credentials.</p>
                    <form className="form" method="post" action="yourpage.html" style={{positon: 'relative', textAlign:'center'}}></form>
                    
                </div>
                <div>
                    <p className="name-help" style={{positon: 'relative', textAlign:'center'}}>Please enter your first and last name.</p>
                    <input type="text" className="name" placeholder="Name" style={{positon: 'relative', marginLeft:'650px'}}></input>
                </div>
                <div>
                    <p className="email-help" style={{positon: 'relative', textAlign:'center'}}>Please enter your current email address.</p>
                    <input type="email" className="email" placeholder="Email" style={{positon: 'relative', marginLeft:'650px'}}></input>
                </div>
                <input type="submit" className="submit" value="Register" style={{positon: 'relative', marginLeft:'700px', marginTop: '10px'}}></input>
            </div>
    
    )
}

export default Register
