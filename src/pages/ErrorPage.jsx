import { useRouteError } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { baffled } from 'react-icons-kit/icomoon/baffled';

const errorMessages = [
  "These are not the droids you are looking for.",
  "It seems like we couldn't find the page you were looking for.",
  "Dude, where's my page?",
  "Looks like a wrong turn! You're not supposed to be here.",
  "Oh no! The page is on vacation. Come back later!",
  "Houston, we have a problem. Page not located!",
  "Lost in the digital wilderness. Can't find the page!",
  "Uh-oh! The page is in stealth mode. Can't locate it!",
  "404 Error: Page vanished into thin air. Any clues?",
  "This is not the page you're looking for. Jedi mind trick failed!",
];

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Function to get a random index from the errorMessages array
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    return errorMessages[randomIndex];
  };

  return (
    <div className="mx-auto text-center justify-center">
      <NavBar />
      <section className="h-fit bg-dat-white shadow-2xl px-20 py-10 text-center w-fit mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-5">
          {error ? `${error.status} ${error.statusText}` : "Unexpected Error"}
        </h1>
        <h1 className="text-xl mb-2">Oops... <Icon icon={baffled} size="25" /></h1>
        {/* Code below: Only display the random message if error is 404 */}
        {error && error.status === 404 && <p className="mb-5">{getRandomMessage()}</p>}
        <p><Link to="/">Navigate to <u>safety</u></Link></p>
      </section>
    </div>
  );
}
