const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">First Name: {''}
            <span className="font-normal normal-case">Mike</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Last Name: {''}
            <span className="font-normal normal-case">Sick</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">halo@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Birthday: {''}
            <span className="font-normal normal-case">10 Feb 1993</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
            <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus incidunt, dolores quaerat natus voluptate ut nisi quas earum suscipit alias soluta, voluptatum at voluptatem vel veniam et a sapiente aut.</span>
        </p>
    </div>
  );
}

export default Patient;
