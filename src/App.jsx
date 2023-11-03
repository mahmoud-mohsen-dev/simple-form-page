import { useState } from 'react'


function App() {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      isChecked: false
   })

    
   function handleChange (event){
    const { name, value, type, checked } = event.target;
    console.log(type)
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
   }

   function handleSubmit (event){
    event.preventDefault()
    console.log(formData)
    if (formData.password === formData.confirmPassword){
      console.log("Successfully signed up")
    }
    else {
      console.log("passwords do not match")
      return
    }

    formData.isChecked
        ? console.log("Thanks for signing up for our newsletter!") : ''
   }

  return (
    <form className="form--sign_up" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email address"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
      />

      <div>
        <input
          type="checkbox"
          id="join"
          name="isChecked"
          onChange={handleChange}
          checked={formData.isChecked}
        />
        <label htmlFor="join">I want to join the newsletter</label>
      </div>

      <button>Sign up</button>
    </form>
  );
}

export default App
