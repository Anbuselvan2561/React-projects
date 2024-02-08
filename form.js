import { useState } from "react";

function MyForm(){
    const[inputs,setInputs]=useState({phone:'+91'});

    function HandleSubmit(e){
         e.preventDefault();
         console.log("form submitted" ,inputs)

    };

    function HandleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputs((previousState)=>{return{...previousState,[name]:value}})
    };


    return(
        < >
        <div className="form-container">
        <link rel="stylesheet" href=""/>
        <div className="form" >
            <h1>FORM</h1>
            
        <form onSubmit={HandleSubmit}>
            <label>Enter your Name:<input type="text" name="name" onChange={HandleChange} /></label><br/>
            <label>Enter your Age:<input type="text" name="age" onChange={HandleChange}/></label><br/>
            <label>Enter your Email:<input type="text" name="email" onChange={HandleChange}/></label><br/>
            <label>Enter your Phone:<input type="text" name="phone" onChange={HandleChange} value={inputs.phone}/></label><br/>
            <label>Enter your Country:
                <select name="country" onChange={HandleChange} >
                   <option>Select</option>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                    <option value="us">US</option>
                </select>
            </label><br/>
            <input type="submit" value="submit Form" id="submit-btn"/>
            </form> 
          </div>
        </div>
        </>
    )
};

export default MyForm;

