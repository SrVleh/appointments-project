const Form = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Traker</h2>
            <p className="text-lg mt-5 text-center mb-10">Add and Manage {''} <span className="text-indigo-600 font-bold text-xl">Patients</span></p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">First Name</label>
                    <input 
                        id="name"
                        type="text"  
                        placeholder="First Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="lname" className="block text-gray-700 uppercase font-bold">Last Name</label>
                    <input 
                        id="lname"
                        type="text"  
                        placeholder="Last Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        id="email"
                        type="email"  
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="birthday" className="block text-gray-700 uppercase font-bold">Birthday</label>
                    <input 
                        id="birthday"
                        type="date"  
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label>
                    <textarea id="symptoms" placeholder="Describe the symptoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
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