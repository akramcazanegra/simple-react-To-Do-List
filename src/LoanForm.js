import "./FormStyle.css" 
import Modal from "./Model"
import { useState } from "react"

export default function LeonForm(){

    const [errorMessage , setErrorMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [leonInputs , setLeonInputs ] = useState({
        name:"",
        phoneNumber:"",
        age:"",
        itsEmployee: false,
        salaryRang:""

    })

    function handleFormSubmit(event){
        event.preventDefault();
        setErrorMessage(null)
        const {age , phoneNumber} = leonInputs;
        if(age < 18 || age > 100){
            setErrorMessage("the age is not allowed")
        }else if(phoneNumber.length < 10 || phoneNumber.length > 12 ){
            setErrorMessage("the phone  is  INCORRECT")
        }

        setShowModal(true)
     }
        const  btnIsDisabled = leonInputs.name == ""  ||
        leonInputs.age == "" || 
        leonInputs.phoneNumber == "";

        let btnClass = ""
        if(btnIsDisabled){
            btnClass = "disabled"
        }else{
            btnClass = ""
        }

        function handleDivClick(){
            if(showModal){
                setShowModal(false)
            }
            
        }
 
    return(
      
        <div  onClick={handleDivClick} 
        className="flex" 
        style={ {  flexDirection: "column"}}> 
            <form className="flex" id="LeonForm" style={{flexDirection: "column"}}>
               <h1>
                Requesting a Leon 
               </h1>
               <hr></hr>

               <label>Name:</label>
               <input value={leonInputs.name} onChange={(event) => {
                    setLeonInputs({...leonInputs, name: event.target.value});
               }  } />

               <label>Phone Number:</label>
               <input value={leonInputs.phoneNumber} onChange={(event) => {
                    setLeonInputs({...leonInputs, phoneNumber: event.target.value});
               }  }/>

               <label>Age:</label>
               <input  value={leonInputs.age} onChange={(event) => {
                    setLeonInputs({...leonInputs, age: event.target.value});
               }  }/>

               <label style={{marginTop:"30px"}}>Are you an employee?</label>
               <input type="checkbox" checked={leonInputs.itsEmployee} onChange={(Event) => {
                setLeonInputs({...leonInputs, itsEmployee: Event.target.checked});
               }}/>

               <label>Salary:</label>
               <select  value={leonInputs.salaryRang} onChange={(Event) => {
                setLeonInputs({...leonInputs, salaryRang: Event.target.value});
               }}>
                  <option>Less than 500$</option>
                  <option>Between 500$ and 2000$</option>
                  <option>Above 2000£</option>
               </select>

               <button
               className={btnClass}
               onClick={handleFormSubmit} 
                disabled={btnIsDisabled}
                id="submit-leon">Submit</button>
            </form>

            <Modal errorMessage={errorMessage} isVisible={showModal}/>
        </div>
    )
}