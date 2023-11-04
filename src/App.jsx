import { useState } from 'react'


function App() {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      isChecked: false,
      result: "",
      newsletter: ""
   })

    
   function handleChange (event){
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
   }
  let result 
  let newsletter
   function handleSubmit (event){
    event.preventDefault()
    const {email, password, confirmPassword, isChecked} = formData
    
    if (password === confirmPassword){
      if (email !== '' && password !== '' && confirmPassword !== ''){
        result = "Successfully signed up";
        isChecked
          ? (newsletter = "Thanks for signing up for our newsletter!")
          : "";
      } else {
        result = "Please fill the Form"
      }
    }
    else {
      result = "passwords do not match"
    }

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        result: result,
        newsletter: newsletter
      }
    })
   }
   const display = !!(formData.email || formData.password || formData.confirmPassword || formData.isChecked)

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
        <label htmlFor="join">I want to join the news letter</label>
      </div>

      <button>Sign up</button>
      {display && (
        <div className="result">
          {formData.email && (
            <>
              <h4>Email</h4>
              <span>{formData.email}</span>
            </>
          )}

          {formData.password && (
            <>
              <h4>Password</h4>
              <span>{formData.password}</span>
            </>
          )}

          {formData.confirmPassword && (
            <>
              <h4>confirm Password</h4>
              <span>{formData.confirmPassword}</span>
            </>
          )}

          {formData.isChecked && (
            <>
              <h4>Joined news letter</h4>
              <span>{formData.isChecked ? "Yes" : "No"}</span>
            </>
          )}

          {formData.result && (
            <>
              <h4 className='output'>{formData.result}</h4>
              <span>{formData.newsletter}</span>
            </>
          )}
        </div>
      )}
    </form>
  );
}

export default App
