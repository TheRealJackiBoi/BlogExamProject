import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Index() {
  return (
    <div className="flex flex-col items-center justify-center">

      <img src={logo} alt="Blogged logo" className="w-36 flex-shrink mt-8" />

      <h1 className="text-4xl font-bold mb-4">Login or signup</h1>
      <p className="mb-4">Are you ready to be blogged?</p>

      <Link
        to="/auth/login"
        className="bg-dat-black text-white font-semibold py-2 w-40 rounded-full mt-12 text-center"
      >
        Login{' '}
      </Link>
      <p className="my-4">or</p>
      <Link
        to="/auth/signup"
        className="bg-dat-blue text-white font-semibold py-2 w-40 rounded-full text-center"
      >
        Signup
      </Link>
    </div>
  );
}

export default Index;
