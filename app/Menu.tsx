import ContactInfo from "./images/ContactInfo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  return (
    <div className="flex flex-col min-h-screen items-center space-y-0 w-full bg-gray-700">
      <img src={ContactInfo} alt="Contact Information" className="w-full" />
      <button
        className="w-full px-4 py-2 bg-gray-700
       text-white font-semibold shadow-md 
        hover:bg-blue-900 focus:outline-none focus:ring-2
        hover:text-yellow-400
         focus:ring-blue-400 focus:ring-opacity-75"
      >
        Vision
      </button>
      <button
        className="w-full px-4 py-2 bg-gray-700
        text-white font-semibold shadow-md 
         hover:bg-blue-900 focus:outline-none focus:ring-2
         hover:text-yellow-400
          focus:ring-blue-400 focus:ring-opacity-75"
      >
        About Us
      </button>
      <button
        className="w-full px-4 py-2 bg-gray-700
        text-white font-semibold shadow-md 
         hover:bg-blue-900 focus:outline-none focus:ring-2
         hover:text-yellow-400
          focus:ring-blue-400 focus:ring-opacity-75"
      >
        Board
      </button>      
      <button
        className="w-full px-4 py-2 bg-gray-700
       text-white font-semibold shadow-md 
        hover:bg-blue-900 focus:outline-none focus:ring-2
        hover:text-yellow-400
         focus:ring-blue-400 focus:ring-opacity-75"
      >
        Locations
      </button>
      <br />
      <br />
      <br />
      <br />
        <label
          htmlFor="phone"
          className="w-full  px-4 py-2 bg-gray-900 text-white font-semibold shadow-md flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2" />
          (816) 679-5189
        </label>
        <label
          htmlFor="email"
          className="w-full  px-4 py-2 bg-gray-900 text-white font-semibold shadow-md flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-2" />
          mmh@206hall.com
        </label>
     
      <br />
      <div className="w-full flex items-center justify-center">
        <button
          className="px-4 py-2 bg-blue-500
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75 mb-28"
        >
          <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 mr-2" />
        </button>
        <button
          className="px-4 py-2 bg-red-500
       text-white font-semibold shadow-md
        hover:bg-red-700 focus:outline-none focus:ring-2
         focus:ring-red-400 focus:ring-opacity-75 mb-28"
        >
          <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 mr-2" />
        </button>
        <button
          className="px-4 py-2 bg-purple-500
       text-white font-semibold shadow-md
        hover:bg-purple-700 focus:outline-none focus:ring-2
         focus:ring-purple-400 focus:ring-opacity-75 mb-28"
        >
          <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 mr-2" />
        </button>
        <button
          className="px-4 py-2 bg-blue-500
       text-white font-semibold shadow-md
        hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-opacity-75 mb-28"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 mr-2" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
