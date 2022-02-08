const Patient = ({ patient }) => {

    const { fName, lName, email, birthday, symptoms } = patient

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">First Name: {''}
            <span className="font-normal normal-case">{ fName }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Last Name: {''}
            <span className="font-normal normal-case">{ lName }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{ email }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Birthday: {''}
            <span className="font-normal normal-case">{ birthday }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
            <span className="font-normal normal-case">{ symptoms }</span>
        </p>
    </div>
  );
}

export default Patient;
