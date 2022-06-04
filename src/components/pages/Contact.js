import React, { useState} from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { validateEmail } from '../../utils/helpers'

const Contact = () => {
    const [errorMessage, setErrorMessage] =useState('')
    // hook that will manage the form data initially the input fields will be cleared when loading. form state variable has three key value pairs bellow
    const [formState, setFormState] = useState({ name: '', email: '', message: ''})
    const { name, email, message } = formState

    const  handleChange = (e) => {
        if(e.target.name === "email"){
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            // isValid conditional statement
            if(!isValid){
                setErrorMessage('Your email is invalid')
            }else{
                setErrorMessage('')
            }
        }
            else {
                if(!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required!`)
                }else{
                    setErrorMessage('')
                }
            }
            console.log('errorMessage', errorMessage)
        
    
        //    using the setformstate function to update the formstate value for the *name property
         // The preceding conditional statement only allows the state to update with the user input if there is no error message, which is the correct logic
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
       }

  return (
    <div  data-aos="fade-up" 
    name="contact"
    className="w-full h-screen  flex justify-center items-center p-4 bg-[#c7f9cc]"
  >
    <form
      target="_blank"
      method="POST"
      action="https://getform.io/f/9ac79705-cff5-43ab-a726-ecd9cbd6eacf"
      className="flex flex-col max-w-[600px] w-full"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-black border-[#80ed99]">
          Contact
        </p>
        <p className="pt-8 text-gray-500 py-4">
          Submit the form below or send an email: kalaitzidispaul@gmail.com
        </p>
      </div>
      <input className="p-2 border-b-2 outline-none focus:border-[#80ed99]" type="text" placeholder="Name" name="name"  onBlur={handleChange} defaultValue={name} />
      <input
        className="my-4 p-2 border-b-2 outline-none focus:border-[#80ed99]"
        type="text"
        placeholder="Email"
        name="email"
        onBlur={handleChange} defaultValue={email}
      />
      <textarea
        className="bg-white p-2 border-2  outline-none focus:border-[#80ed99]"
        name="message"
        rows="10"
        placeholder="Message"
        defaultValue={message}  onBlur={handleChange}
      ></textarea>
      {
        <div className='p-2  m-2 text-red-500 '>
        <p className='font-bold'> {errorMessage} </p>
        </div>
    }
      <button className="text-white bg-black px-5 py-3 mx-auto mt-4 flex items-center hover:bg-[#80ed99] hover:text-black hover:duration-300">
        Reach Out <FaPaperPlane className="inline ml-2" />
      </button>
    </form>
  </div>
  )
}

export default Contact