import ContactInfo from "./images/ContactInfo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <div className="flex flex-col items-center space-y-0 w-full">
      <label htmlFor="menu" className="text-2xl font-semibold mb-20">
        Lee&apos;s Summit Recovery
      </label>
      <button
        className="w-full px-4 py-2 bg-gray-700
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75"
      >
        Vision
      </button>
      <button
        className="w-full px-4 py-2 bg-gray-500
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75"
      >
        About Us
      </button>
      <button
        className="w-full px-4 py-2 bg-gray-700
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75"
      >
        Calendar
      </button>
      <button
        className="w-full px-4 py-2 bg-gray-500
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75"
      >
        Board
      </button>
      <button
        className="w-full px-4 py-2 bg-gray-700
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75 mb-28"
      >
        Locations
      </button>
      <img src={ContactInfo} alt="Contact Information" className="w-full" />
      <label
        htmlFor="phone"
        className="w-full  px-4 py-2 bg-gray-500 text-white font-semibold shadow-md flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2" />
        (816) 679-5189
      </label>
      <label
        htmlFor="email"
        className="w-full  px-4 py-2 bg-gray-500 text-white font-semibold shadow-md flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-2" />
        mmh@206hall.com
      </label>
      <button
        className="px-4 py-2 bg-gray-700
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75 mb-28"
      >
        Locations
      </button>
    </div>
  );
};

export default Menu;
