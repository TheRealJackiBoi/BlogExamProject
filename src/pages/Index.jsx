import logo from "../assets/logo/logo.svg";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center">

      <img src={logo} alt="Blogged logo" className="w-1/6" />

      <h1 className="text-4xl font-bold mb-4">Login or signup</h1>
      <p className="mb-4">
        Are you ready to be blogged?
      </p>

      <button to="/login" className="bg-black text-white font-semibold py-2 w-40 rounded-full mt-12">Login </button>
      <p className="my-4">or</p>
      <button to="/signup" className="bg-blue-500 text-white font-semibold py-2 w-40 rounded-full">Signup</button>
      
    </div>
  );
}

export default Index;
