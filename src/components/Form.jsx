import { useState, useEffect } from 'react';
import Error from './Error'

const Form = ({ patients, setPatients }) => {

    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirth] = useState('')
    const [symptoms, setSympt] = useState('')

    const [error, setError] = useState(false)

    const genId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Form validation
        if([ fName, lName, email, birthday, symptoms ].includes('')){
            console.log("There's at least one empty camp!")
            setError(true)
            return
        }

        setError(false)

        //Patient Obj
        const patientObj = {
            fName,
            lName,
            email,
            birthday,
            symptoms,
            id: genId()
        }

        setPatients([...patients, patientObj])

        //Reset Form
        
        setFname('')
        setLname('')
        setEmail('')
        setBirth('')
        setSympt('')

        
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Traker</h2>
            <p className="text-lg mt-5 text-center mb-10">Add and Manage {''} <span className="text-indigo-600 font-bold text-xl">Patients</span></p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                >
                {error && <Error><p>All fields are required</p></Error>}
                <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">First Name</label>
                    <input 
                        id="name"
                        type="text"  
                        placeholder="First Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ fName }
                        onChange={ (e) => setFname(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="lname" className="block text-gray-700 uppercase font-bold">Last Name</label>
                    <input 
                        id="lname"
                        type="text"  
                        placeholder="Last Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ lName }
                        onChange={ (e) => setLname(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        id="email"
                        type="email"  
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="birthday" className="block text-gray-700 uppercase font-bold">Birthday</label>
                    <input 
                        id="birthday"
                        type="date"  
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ birthday }
                        onChange={ (e) => setBirth(e.target.value)}
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label>
                    <textarea id="symptoms" placeholder="Describe the symptoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={ symptoms }
                    onChange={ (e) => setSympt(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all" 
                    value="Add patient"/>
            </form>
        </div>
    )
}

export default Form