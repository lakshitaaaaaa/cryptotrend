import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="pb-6  lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/"><div className="flex-shrink-0">
            
          <svg width="120" height="44" viewBox="0 0 136 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.8836 23.7993C54.8836 22.2158 55.2262 20.8074 55.9113 19.5741C56.5965 18.3256 57.5481 17.3587 58.7662 16.6735C59.9995 15.9732 61.3927 15.623 62.9457 15.623C64.849 15.623 66.4782 16.1254 67.8333 17.1303C69.1884 18.1352 70.0943 19.5056 70.5511 21.2413H66.2574C65.9376 20.5714 65.4809 20.0613 64.887 19.7111C64.3085 19.3609 63.6461 19.1858 62.9 19.1858C61.6972 19.1858 60.7227 19.6045 59.9767 20.442C59.2306 21.2794 58.8576 22.3985 58.8576 23.7993C58.8576 25.2001 59.2306 26.3192 59.9767 27.1566C60.7227 27.9941 61.6972 28.4128 62.9 28.4128C63.6461 28.4128 64.3085 28.2377 64.887 27.8875C65.4809 27.5373 65.9376 27.0272 66.2574 26.3573H70.5511C70.0943 28.093 69.1884 29.4634 67.8333 30.4683C66.4782 31.458 64.849 31.9528 62.9457 31.9528C61.3927 31.9528 59.9995 31.6102 58.7662 30.9251C57.5481 30.2247 56.5965 29.2578 55.9113 28.0245C55.2262 26.7912 54.8836 25.3828 54.8836 23.7993ZM76.8482 21.2185C77.305 20.5181 77.876 19.97 78.5612 19.5741C79.2463 19.163 80.0076 18.9574 80.8451 18.9574V23.0913H79.7716C78.7972 23.0913 78.0663 23.3045 77.5791 23.7308C77.0919 24.1419 76.8482 24.8727 76.8482 25.9233V31.8386H72.9428V19.0945H76.8482V21.2185ZM95.73 19.0945L87.7364 37.891H83.534L86.4574 31.4047L81.2729 19.0945H85.6352L88.5814 27.0653L91.5048 19.0945H95.73ZM101.048 20.8988C101.428 20.3049 101.954 19.8253 102.624 19.4599C103.294 19.0945 104.078 18.9118 104.976 18.9118C106.027 18.9118 106.978 19.1782 107.831 19.7111C108.684 20.244 109.354 21.0053 109.841 21.995C110.343 22.9847 110.594 24.1343 110.594 25.4437C110.594 26.7531 110.343 27.9103 109.841 28.9152C109.354 29.9049 108.684 30.6738 107.831 31.222C106.978 31.7549 106.027 32.0213 104.976 32.0213C104.093 32.0213 103.309 31.8386 102.624 31.4732C101.954 31.1078 101.428 30.6358 101.048 30.0572V37.9138H97.1423V19.0945H101.048V20.8988ZM106.62 25.4437C106.62 24.4692 106.346 23.7079 105.798 23.1598C105.265 22.5965 104.603 22.3148 103.811 22.3148C103.035 22.3148 102.372 22.5965 101.824 23.1598C101.291 23.7232 101.025 24.4921 101.025 25.4666C101.025 26.441 101.291 27.2099 101.824 27.7733C102.372 28.3366 103.035 28.6183 103.811 28.6183C104.588 28.6183 105.25 28.3366 105.798 27.7733C106.346 27.1947 106.62 26.4182 106.62 25.4437ZM119.746 28.527V31.8386H117.759C116.343 31.8386 115.239 31.496 114.448 30.8109C113.656 30.1105 113.26 28.9761 113.26 27.4079V22.3376H111.707V19.0945H113.26V15.9884H117.165V19.0945H119.723V22.3376H117.165V27.4535C117.165 27.8342 117.257 28.1083 117.44 28.2757C117.622 28.4432 117.927 28.527 118.353 28.527H119.746ZM127.723 32.0213C126.474 32.0213 125.348 31.7549 124.343 31.222C123.353 30.6891 122.569 29.9278 121.99 28.9381C121.427 27.9484 121.145 26.7912 121.145 25.4666C121.145 24.1571 121.434 23.0076 122.013 22.0179C122.592 21.013 123.383 20.244 124.388 19.7111C125.393 19.1782 126.52 18.9118 127.768 18.9118C129.017 18.9118 130.144 19.1782 131.149 19.7111C132.154 20.244 132.945 21.013 133.524 22.0179C134.102 23.0076 134.392 24.1571 134.392 25.4666C134.392 26.776 134.095 27.9332 133.501 28.9381C132.922 29.9278 132.123 30.6891 131.103 31.222C130.098 31.7549 128.971 32.0213 127.723 32.0213ZM127.723 28.6412C128.469 28.6412 129.101 28.3671 129.618 27.819C130.151 27.2708 130.418 26.4867 130.418 25.4666C130.418 24.4464 130.159 23.6623 129.641 23.1141C129.139 22.566 128.515 22.2919 127.768 22.2919C127.007 22.2919 126.375 22.566 125.873 23.1141C125.37 23.647 125.119 24.4312 125.119 25.4666C125.119 26.4867 125.363 27.2708 125.85 27.819C126.352 28.3671 126.977 28.6412 127.723 28.6412Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000244141 14.5237C0.000244141 21.9103 0.000244141 25.1574 0.000244141 32.5461C0.000244141 34.4622 1.0261 36.3422 2.72172 37.3172L18.3194 46.3231C19.998 47.3171 22.1324 47.3171 23.8089 46.3231L39.4066 37.3172C41.1022 36.3422 42.1281 34.46 42.1281 32.5461C42.1281 25.1574 42.1281 21.9124 42.1281 14.5237C42.1281 12.5928 41.0852 10.717 39.4066 9.75266L23.8111 0.746766C22.1324 -0.247294 19.998 -0.247294 18.3215 0.746766L2.72172 9.75266C1.04305 10.717 0.000244141 12.5928 0.000244141 14.5237Z" fill="#6639E4"/>
          <path opacity="0.55" fill-rule="evenodd" clip-rule="evenodd" d="M0.996216 11.348C1.44132 10.7036 2.02419 10.1504 2.71939 9.74985L18.3191 0.746075C19.1585 0.247985 20.1123 0 21.0639 0C22.0177 0 22.9694 0.247985 23.8087 0.746075L39.4064 9.75196C40.1016 10.1526 40.6844 10.7036 41.1295 11.3501C40.4322 12.359 39.2792 13.0754 38.2915 13.6413C33.4653 16.4264 28.6222 19.1733 23.8066 21.9541C22.9673 22.4501 22.0135 22.7002 21.0618 22.7002C20.108 22.7002 19.1564 22.4522 18.317 21.9541C13.5057 19.1712 8.66256 16.4243 3.83639 13.6392C2.84657 13.0733 1.69354 12.3569 0.996216 11.348Z" fill="white"/>
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M18.3191 21.9519C13.5057 19.1711 8.66253 16.4242 3.83635 13.6391C2.84653 13.0732 1.69351 12.3568 0.99618 11.3479C0.345484 12.3165 0.0105977 13.353 0 14.523C0 21.9095 0 25.1566 0 32.5453C0.0105977 33.7111 0.345484 34.7539 0.99618 35.7183C1.69351 34.7115 2.84653 33.993 3.83423 33.4271C8.66041 30.642 13.5035 27.8951 18.3191 25.1143C19.1478 24.6246 20.0868 24.3745 21.0279 24.3682C21.9923 24.3618 22.9609 24.6098 23.8108 25.1143C28.6264 27.8951 33.4695 30.642 38.2957 33.4271C39.2834 33.993 40.4385 34.7094 41.1337 35.7183C41.7993 34.7306 42.1193 33.692 42.1299 32.5453C42.1299 25.1566 42.1299 21.9116 42.1299 14.523C42.1193 13.3763 41.7972 12.3335 41.1337 11.35C40.4364 12.3568 39.2834 13.0753 38.2957 13.6412C33.4695 16.4263 28.6264 19.1732 23.8108 21.954C22.9778 22.4479 22.0304 22.6959 21.083 22.7001C20.125 22.7001 19.1648 22.4521 18.3191 21.9519Z" fill="white"/>
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9.73926 28.3785C9.73926 24.4065 9.73926 22.66 9.73926 18.688C9.74986 17.6452 10.2819 16.6511 11.2017 16.1234L19.5887 11.2802C20.4916 10.7461 21.6383 10.7461 22.5412 11.2802L30.9282 16.1234C31.8502 16.6532 32.3801 17.6452 32.3907 18.688C32.3907 22.66 32.3907 24.4065 32.3907 28.3785C32.3801 29.4234 31.8439 30.4175 30.9282 30.9431L22.5412 35.7863C21.6383 36.3204 20.4916 36.3204 19.5887 35.7863L11.2017 30.9452C10.2861 30.4175 9.74986 29.4255 9.73926 28.3785Z" fill="white"/>
          </svg>
          
           
          </div></Link>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            {/* Menu open: "hidden", Menu closed: "block" */}
            <svg
              className={`block w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>

            {/* Menu open: "block", Menu closed: "hidden" */}
            <svg
              className={`hidden w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex lg:items-center text-white lg:ml-auto lg:space-x-10 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
            <a href="#" title="" className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Home</a>
            <a href="#" title="" className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
            <a href="#" title="" className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
            <a href="#" title="" className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Tokens</a>
            <a href="#" title="" className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Blog</a>
            <a href="#" title="" className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pages</a>
          </div>

          <a
            href="http://munity.quantafile.com"
            title=""
            className="items-center justify-center hidden px-4 py-2 ml-10 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 border border-transparent rounded-md lg:inline-flex hover:bg-gray-800 focus:bg-blue-700"
            role="button"
          >
            Download App
          </a>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
              <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Contact</a>
              <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
            </div>
          </div>

          <div className="px-6 mt-6">
            <a
              href="#"
              title=""
              className="inline-flex justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md items-center hover:bg-gray-800 focus:bg-blue-700"
              role="button"
            >
              Login
            </a>
          </div>

          {/* Close button */}
          <button
            type="button"
            className={`fixed top-4 right-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            onClick={closeMobileMenu}
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
