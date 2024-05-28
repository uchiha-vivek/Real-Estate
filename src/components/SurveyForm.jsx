import { useState } from "react"




function SurveyForm(){
  // necessary fields
  const[formData,setFormData] = useState({
    firstName:'',
    email:'',
    information:''
  })

  function handleSubmit(){

  }

    return(

        <>
         <form  onSubmit={handleSubmit} >
            <label>First Name:</label>
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            />
            <label>Email:</label>
            <input
            type="text"
            name="email"
            value={formData.email}
            />
            <label>Which source of information do you use while choosing real estate property?</label>
            <select name="information" value={formData.information}  >
                <option value="">Select an option</option>
                <option value="broker" >Brokers</option>
                <option value='friend' >Family/Friends</option>
                <option value='advertisement' >Real State advertisement</option>
                <option value='internet' >Internet</option>
                <option value='other' >Other</option>
            </select>
         </form>
        </>
    )
}
export default SurveyForm